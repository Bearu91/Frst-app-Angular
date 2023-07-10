import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from "primeng/listbox";
import { CardModule } from "primeng/card";
import { MenubarModule } from "primeng/menubar";
import { MessageModule } from "primeng/message";
import { MessagesModule } from "primeng/messages";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {ToolbarModule} from "primeng/toolbar";
import {TabMenuModule} from "primeng/tabmenu";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TaskAddComponent,
    TaskDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    ListboxModule,
    CardModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    BrowserAnimationsModule,
    ToolbarModule,
    TabMenuModule,
    HttpClientModule

  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
