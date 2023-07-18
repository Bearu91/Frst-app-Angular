import { Injectable } from '@angular/core';
import {Task, TaskEditDTO} from "./task-model";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import {Dictionary} from "./dictionary-model";
import { Store, select } from '@ngrx/store';
import * as actions from './app.actions';
import { AppState } from './app.state';
import {selectTaskList} from "./selectors";


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiEndPoint='https://crudcrud.com/api/1edc0a58008c49d090d940778be56d01/todo'
  // private taskList = new BehaviorSubject<Dictionary[]>([]);

  constructor(private http: HttpClient, private store: Store<AppState>) {}


  fetchDictionaries(): Observable<Dictionary[]> {
    return this.http.get<Task[]>(this.apiEndPoint).pipe(
      map(tasks => tasks.map(task => ({id: task._id, label: task.title})))
    );
  }
  // getTasks():Observable<Task[]> {
  //   return this.http.get<Task[]>(this.apiEndPoint);
  // }

  getDictionaries(): Observable<Dictionary[]> {
    return this.store.pipe(
      select(
        selectTaskList
      ),
      map(dictionaries => { console.log(dictionaries);return dictionaries})
    )
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
  addTask(newTask: TaskEditDTO): Observable<Task> {
    return this.http.post<Task>(`${this.apiEndPoint}`, newTask);
  }


}
