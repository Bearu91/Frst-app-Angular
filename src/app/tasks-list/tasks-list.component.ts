import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from "../task-model";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  tasks = this.taskService.getTasks();
  selectedTask: any;
  private router: any;

  constructor(private taskService: TaskService) {}

  deleteTask(task: Task) {
     this.taskService.deleteTask(task.id);
    this.tasks = this.taskService.getTasks();

    this.router.navigate(['/tasks']);
  }

}
