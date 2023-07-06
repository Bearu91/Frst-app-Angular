import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {
  taskForm: FormGroup;

  constructor(
    private router: Router,
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const title = this.taskForm.get('title')?.value;
      const description = this.taskForm.get('description')?.value;

      const newTask: any = {
        id: this.taskService.generateId(),
        name: title,
        description: description
      };

      this.taskService.addTask(newTask);
      this.router.navigate(['/tasks']).then(() => {
        // Code to execute after navigation is complete
      });
    }
  }
}
