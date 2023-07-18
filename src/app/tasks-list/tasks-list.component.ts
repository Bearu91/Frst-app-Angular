import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from "../task-model";
import { Router } from "@angular/router";
import {Dictionary} from "../dictionary-model";
import {AppState} from "../app.state";
import { Store } from '@ngrx/store';
import * as actions from '../app.actions';
import {Observable} from "rxjs";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks$: Observable<Dictionary[]>;

  constructor(private taskService: TaskService, private router: Router, private store: Store<AppState>) { this.tasks$ = this.store.select(state => state.dictionaries)}

  ngOnInit() {
    this.store.dispatch(actions.loadDictionaries());
    this.tasks$ = this.taskService.getDictionaries();
  }

  getTasks(): void {
    this.tasks$ = this.store.select(state => state.dictionaries);
  }
  deleteTask(id: string): void {
    this.store.dispatch(actions.deleteTask({ id }));
  }

}

// updateTask(task: Task){
//   this.taskService.updateTask(task).subscribe();
// }


// editTask(_id: string) {
//   this.router.navigate([`/detail/${_id}/edit`])
// }
