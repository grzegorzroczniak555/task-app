import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [];

  constructor() { }

  getId(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  addTask(task: Task): Observable<Task[]> {
    task.id = this.getId(1, 500);
    this.tasks.push(task);
    return of (this.tasks);
  }

}
