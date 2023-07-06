import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Task } from "../task-model";

@Component({
  selector: 'app-task-detail',
  templateUrl: 'task-detail.component.html',
  styleUrls: ['task-detail.component.css']
  //   `
  //   <h2>Task Detail</h2>
  //   <div *ngIf="task">
  //     <h3>{{task.name}}</h3>
  //     <h3>{{task.description}}</h3>
  //   </div>
  //   <button (click)="confirmTaskCompletion(task)">Potwierdź wykonanie</button>
  // `,
})
export class TaskDetailComponent implements OnInit {
  task: any;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService

) {}

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTask(id);
  }

  confirmTaskCompletion(task: Task) {
    this.confirmationService.confirm({
      message: 'Czy na pewno chcesz oznaczyć to zadanie jako wykonane?',
      accept: () => {
        // Oznacz zadanie jako wykonane
        task.completed = true;
        // Wyświetl wiadomość o sukcesie
        this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Zadanie zostało oznaczone jako wykonane.' });
      },
      reject: () => {
        // Odrzucono potwierdzenie
      }
    });
  }


}

