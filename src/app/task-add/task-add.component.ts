import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { TaskService } from '../task.service';
import { Task } from '../task-model';
@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  messages: Message[] = [];
  task!: Task;
  isEditMode = false;
  isSubmitted = false;
  taskForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: '',
  });

  constructor(private tasksService: TaskService, private fb: FormBuilder) {}

  ngOnInit() {
    this.task = history.state.task;
    console.log(this.task)

    // check if task is passed to state
    if (this.task.title) {
      this.taskForm.setValue({
        title: this.task.title,
        description: this.task.description,
      });
      this.isEditMode = true;
    }
  }

  onSubmit(): void {
    if (this.taskForm.invalid) {
      this.messages = [
        {
          severity: 'error',
          summary: 'Error',
          detail: 'One or more fields are required',
        },
      ];
      this.isSubmitted = true;
      return;
    }

    this.messages = [
      {
        severity: 'success',
        summary: 'Success',
        detail: `${this.taskForm.value.title} ${
          this.isEditMode ? 'updated' : 'added'
        } successfully`,
      },
    ];
    if (this.isEditMode) {
      this.task.title = this.taskForm.value.title ?? '';
      this.task.description = this.taskForm.value.description ?? '';
      this.tasksService.updateTask(this.task).subscribe();
    } else {
      const newTask: Task = {
        title: this.taskForm.value.title ?? '',
        description: this.taskForm.value.description ?? '',
        done: false,
      };

      this.tasksService.addTask(newTask).subscribe();

      this.taskForm.reset();
    }
  }

  isError(): boolean | undefined {
    return (
      this.taskForm.get('title')?.invalid &&
      (this.taskForm.get('title')?.dirty ||
        this.taskForm.get('title')?.touched ||
        this.isSubmitted)
    );
  }

  onInputChange(): void {
    this.messages = [];
    this.isSubmitted = false;
  }
}
