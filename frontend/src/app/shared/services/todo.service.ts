import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import Todo from 'src/app/model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseURL: string = "http://127.0.0.1:8080"

  constructor(private httpCliente: HttpClient) { }


  list(): Observable<Todo[]> {
    return this.httpCliente.get<Todo[]>(`${this.baseURL}/todo/all`)
  }

  add(todo: Todo): Observable<Todo> {
    return this.httpCliente.post<Todo>(`${this.baseURL}/todo`, todo)
  }

  remove(id: number): Observable<Todo> {
    return this.httpCliente.delete<Todo>(`${this.baseURL}/todo/${id}`);
  }

}
