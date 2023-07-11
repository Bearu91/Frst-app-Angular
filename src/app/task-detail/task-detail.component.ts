import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
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
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.getTask();
  }

  getTask() {

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    if (id) {
      this.taskService.getTask(id).subscribe(task => {
        if (task) {
          this.task = task;
        } else {
          // Obsłuż błąd, gdy zadanie nie zostanie znalezione
        }
      });
    } else {
      // Obsłuż błąd, gdy brakuje identyfikatora zadania
    }
  }
}
