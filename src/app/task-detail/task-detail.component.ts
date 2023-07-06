import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  template: `
    <h2>Task Detail</h2>
    <div *ngIf="task">
      <h3>{{task.name}}</h3>
      <h3>{{task.description}}</h3>
    </div>
  `,
})
export class TaskDetailComponent implements OnInit {
  task: any;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTask(id);
  }
}

