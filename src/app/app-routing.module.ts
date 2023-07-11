import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksListComponent },
  { path: 'add', component: TaskAddComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: '**', redirectTo: '/tasks' },
  { path: 'detail/:id/edit', component: TaskAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
