import { Injectable } from '@angular/core';
import {NewTask, Task} from "./task-model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiEndPoint='https://crudcrud.com/api/93f02abe382f4921a4c4c93d22c92779/unicorns'

  constructor(private http: HttpClient) {}

  getTasks():Observable<Task[]> {
    return this.http.get<Task[]>(this.apiEndPoint);
  }

  getTask(id: string):Observable<Task> {
    return this.http.get<Task>(`${this.apiEndPoint}/${id}`);
  }



  updateTask(id: string, task: Task):Observable<Task> {
    return this.http.put<Task>(`${this.apiEndPoint}/${id}`, {name: task.name, description: task.description, done: task.done});
  }
  deleteTask(id: string):Observable<Object> {
    return this.http.delete(`${this.apiEndPoint}${id}`);
  }
  addTask(task: NewTask): Observable<Task> {
    return this.http.post<Task>(`${this.apiEndPoint}`, task);
  }


}
