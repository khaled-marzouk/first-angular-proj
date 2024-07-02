import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type TaskData } from '../user/user.modal';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false
  // @Output() addTask = new EventEmitter<string>()
  constructor(private tasksService: TasksService) { }

  get selectedUsersTask() {
    return this.tasksService.getUserTasks(this.userId)

  }

  onAddTask(): void {
    this.isAddingTask = true
  }
  onCloseTask(): void {
    this.isAddingTask = false
  }

}