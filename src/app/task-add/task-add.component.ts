import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { TaskService } from '../task.service';
import {Task, TaskEditDTO} from '../task-model';
import {ActivatedRoute} from "@angular/router";
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

  constructor(private tasksService: TaskService, private fb: FormBuilder,private route: ActivatedRoute,) {}

  ngOnInit() {
    /// pobrac adres id z adresu aktualnego url, jesli brak jest adresu ip to utworz nowy obiekt if else getTask
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.getTask(id)
    } else {
    this.task = {
    _id: '',
    title: '',
    description: '',
    done: false,
  }
}

    console.log(this.task)

    if (this.task && this.task.title) {
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
      const newTask: TaskEditDTO = {
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

  getTask(id: string) {
    this.tasksService.getTask(id).subscribe(
      task => {
        this.task = task;
        this.taskForm.setValue({
          title: this.task.title,
          description: this.task.description,
        });
        this.isEditMode = true;
      },
      error => {
          return "sorry your task is missing"
      }
    );
  }
}
