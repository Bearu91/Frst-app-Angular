import { Injectable } from '@angular/core';
import {Task} from "./task-model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiEndPoint='https://crudcrud.com/api/59170280aa4b45cdbe1b27e8611fe716/todo'

  constructor(private http: HttpClient) {}

  getTasks():Observable<Task[]> {
    return this.http.get<Task[]>(this.apiEndPoint);
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
