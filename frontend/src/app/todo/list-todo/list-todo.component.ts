import { Component, OnInit } from '@angular/core';
import Todo from 'src/app/model/Todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {
  todos: Todo[];
  id: number;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.list().subscribe(
      todos => {
        this.todos = todos;
        console.log(this.todos);
      }
    )
  }

  delete(id: number) {
    this.todoService.remove(id).subscribe(
      deletedTodo => {
        this.todos = this.todos.filter(todo => todo.id !== deletedTodo.id)  
      }
    )
  }

}
