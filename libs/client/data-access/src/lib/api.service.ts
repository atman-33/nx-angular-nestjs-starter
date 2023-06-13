import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICreateTodo, ITodo, IUpdateTodo, IUpsertTodo } from '@libs/shared/domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);

  getAllToDoItems(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`/api/todos`);
  }

  getToDoById(todoId: string): Observable<ITodo> {
    return this.http.get<ITodo>(`/api/todos/${todoId}`);
  }

  createToDo(todoData: ICreateTodo): Observable<ITodo> {
    return this.http.post<ITodo>(`/api/todos`, todoData);
  }

  updateToDo(todoId: string, todoData: IUpdateTodo): Observable<ITodo> {
    return this.http.patch<ITodo>(`/api/todos/${todoId}`, todoData);
  }

  createOrUpdateToDo(todoId: string, todoData: IUpsertTodo): Observable<ITodo> {
    return this.http.put<ITodo>(`/api/todos/${todoId}`, todoData);
  }

  deleteToDo(todoId: string): Observable<never> {
    return this.http.delete<never>(`/api/todos/${todoId}`);
  }
}