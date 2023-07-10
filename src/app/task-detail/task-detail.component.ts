// w task-detail.component.ts


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from "../task-model";

@Component({
  selector: 'app-task-detail',
  templateUrl: 'task-detail.component.html',
  styleUrls: ['task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task!: Task;
  taskForm: FormGroup;
  showForm = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const task = this.taskService.getTask(id);
    if (task) {
      this.task = task;
      this.taskForm.get('title')?.setValue(task.name);
      this.taskForm.get('description')?.setValue(task.description);
    } else {
      // Obsłuż błąd, gdy zadanie nie zostanie znalezione
    }
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const title = this.taskForm.get('title')?.value;
      const description = this.taskForm.get('description')?.value;

      const updatedTask: Task = {
        id: this.task.id,
        name: title,
        description: description,
        done: this.task.done
      };

      this.taskService.updateTask(this.task.id, updatedTask);
      this.router.navigate(['/tasks']).then(() => {
        // Code to execute after navigation is complete
      });
    }
  }
}
