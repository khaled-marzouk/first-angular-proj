import { Component, EventEmitter, Inject, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TaskData } from '../../user/user.modal';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  enteredTitle = ""
  enteredSummary = ""
  enteredDueDate = ""
  @Output() close = new EventEmitter<void>
  // @Output() add = new EventEmitter<TaskData>()
  @Input({ required: true }) userId!: string
  private tasksService = inject(TasksService)
  onCancel() {
    this.close.emit()
  }
  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    }, this.userId
    );
    this.close.emit()
  }
}
