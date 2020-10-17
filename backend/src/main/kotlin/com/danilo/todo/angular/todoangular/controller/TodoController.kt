package com.danilo.todo.angular.todoangular.controller

import com.danilo.todo.angular.todoangular.dto.CreateTodoRequestDTO
import com.danilo.todo.angular.todoangular.entity.Todo
import com.danilo.todo.angular.todoangular.repository.TodoRepository
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import java.time.LocalDateTime

@RestController
@RequestMapping("/todo")
@CrossOrigin
class TodoController(private val todoRepository: TodoRepository) {

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun addTodo(@RequestBody todoRequestDTO: CreateTodoRequestDTO): Todo {
        val todo = todoRepository.save(Todo(
                title = todoRequestDTO.title,
                desc = todoRequestDTO.desc,
                createdAt = LocalDateTime.now()
        ))

        return todo
    }

    @GetMapping("/all")
    fun getAll(): List<Todo> {
        return todoRepository.findAll().toList()
    }

    @GetMapping
    fun getByTitle(@RequestParam("title") title: String): Todo {
        val todo = todoRepository.findByTitle(title)

        return todo
    }

    @DeleteMapping("/{id}")
    fun deletetodo(@PathVariable("id") id: Long): Todo? {
        //TODO: handle when there is no todo with passed id
        val todo = todoRepository.findById(id).get()
        todoRepository.delete(todo)

        return todo
    }

}
