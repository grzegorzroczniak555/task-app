import { TaskService } from './../../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.scss']
})
export class DoneTasksComponent implements OnInit {

  doneTasks: Task[] = [];

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.getDoneTasks();
    this.taskService.doneTasksSubject.subscribe(() => {
      this.getDoneTasks();
    });
  }

  getDoneTasks() {
    this.taskService.getDoneTasks()
      .subscribe(tasks => {
        this.doneTasks = tasks;
      });
  }

}
