import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Task } from "../task-model";

@Component({
  selector: 'app-task-detail',
  templateUrl: 'task-detail.component.html',
  styleUrls: ['task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task!: Task;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const task = this.taskService.getTask(id);
    if (task) {
      this.task = task;
    } else {
      // Obsłuż błąd, gdy zadanie nie zostanie znalezione
    }
  }



}
