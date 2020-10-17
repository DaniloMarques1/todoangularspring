import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTodoComponent } from './todo/create-todo/create-todo.component';
import { ListTodoComponent } from './todo/list-todo/list-todo.component';

const routes: Routes = [
  {
    path: 'createTodo',
    component: CreateTodoComponent
  },
  {
    path: 'listTodo',
    component: ListTodoComponent
  },
  {
    path: '',
    component: ListTodoComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
