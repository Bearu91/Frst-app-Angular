import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from "../task-model";
import { Router } from "@angular/router";
import {Dictionary} from "../dictionary-model";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Dictionary[] =[]



  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.fetchDictionaries();
    this.taskService.getDictionaries().subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe((): void => {
      this.tasks = this.tasks.filter(t => t.id !== id);
    });
  }

  // updateTask(task: Task){
  //   this.taskService.updateTask(task).subscribe();
  // }


  // editTask(_id: string) {
  //   this.router.navigate([`/detail/${_id}/edit`])
  // }
}
