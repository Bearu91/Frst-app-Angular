import { Injectable } from '@angular/core';
import {Task} from "./task-model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiEndPoint='https://crudcrud.com/api/93f02abe382f4921a4c4c93d22c92779/todo'

  constructor(private http: HttpClient) {}

  getTasks():Observable<Task[]> {
    return this.http.get<Task[]>(this.apiEndPoint);
  }

  getTask(_id: string):Observable<Task> {
    return this.http.get<Task>(`${this.apiEndPoint}/${_id}`);
  }



  updateTask({ _id, title, description, done }: Task){
    this.http.put(`${this.apiEndPoint}/${_id}`, {title, description, done}).subscribe()
  }
  deleteTask(id: string):Observable<Object> {
    return this.http.delete(`${this.apiEndPoint}${id}`);
  }
  addTask(newTask: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiEndPoint}`, newTask);
  }


}
