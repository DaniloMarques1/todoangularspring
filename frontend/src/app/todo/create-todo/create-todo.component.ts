import { Component, OnInit } from '@angular/core';
import Todo from 'src/app/model/Todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  todo: Todo;

  constructor(private todoService: TodoService) {
    this.todo = new Todo();
  }

  ngOnInit(): void {
  }

  addTodo() {
    this.todoService.add(this.todo).subscribe(
      todo => console.log(todo)
    )
  }

}
