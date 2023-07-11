import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task-model';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  task!: Task;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId !== null) {
      this.getTask(taskId);
    }
  }

  getTask(_id: string): void {
    this.taskService.getTask(_id).subscribe(task => {
      this.task = task;
    });
  }

  // saveTask(): void {
  //   this.taskService.updateTask(this.task._id, this.task).subscribe(() => {
  //     // Przekierowanie do szczegółów zadania po zapisie
  //     this.router.navigate(['/detail', this.task._id]);
  //   });
  // }
}
