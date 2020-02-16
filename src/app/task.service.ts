import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task/task';
import { Status } from './task/status';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];

  constructor() { }

  private getId(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  addTask(task: Task): Observable<Task> {
    task.id = this.getId(1, 500);
    this.tasks.push(task);
    return of(task);
  }

  getTasksInProgress(): Observable<Task[]> {
    const taskInProgress = this.tasks.filter(t => t.status !== Status.DONE);
    return of(taskInProgress);
  }

  finishTask(task: Task): Observable<Task> {
    task.status = Status.DONE;
    return of(task);
  }

}
