import { Injectable } from '@angular/core';
import {Task} from "./task-model";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Dictionary} from "./dictionary-model";

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiEndPoint='https://crudcrud.com/api/59170280aa4b45cdbe1b27e8611fe716/todo'

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Dictionary[]> {
    return this.http.get<Task[]>(this.apiEndPoint).pipe(
      map(tasks => tasks.map(task => ({ id: task._id, label: task.title } as Dictionary)))
    );
  }

  getTask(id: string):Observable<Task> {
    return this.http.get<Task>(`${this.apiEndPoint}/${id}`);
  }



  updateTask({ _id, title, description, done }: Task) :Observable<Task> {
   return this.http.put<Task>(`${this.apiEndPoint}/${_id}`, {title, description, done})

  }
  deleteTask(id: string):Observable<Object> {
    return this.http.delete(`${this.apiEndPoint}/${id}`);
  }
  addTask(newTask: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiEndPoint}`, newTask);
  }


}
