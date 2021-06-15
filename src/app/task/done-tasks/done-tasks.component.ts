import { TaskService } from './../../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.scss']
})
export class DoneTasksComponent implements OnInit {

  doneTasks: Task[] = [];
  router: string;

  constructor(public taskService: TaskService,
              private _router: Router) {
              this.router = _router.url;
  }

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
