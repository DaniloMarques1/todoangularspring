package com.danilo.todo.angular.todoangular.repository

import com.danilo.todo.angular.todoangular.entity.Todo
import org.springframework.data.repository.CrudRepository

interface TodoRepository: CrudRepository<Todo, Long> {
    fun findByTitle(title: String): Todo
}