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
    const tasksInProgress = this.tasks.filter(t => t.status === Status.IN_PROGRESS);
    return of(tasksInProgress);
  }

  finishTask(task: Task): Observable<Task> {
    const currentTask = this.tasks.filter(t => t.id === task.id)[0];
    if (!!currentTask) {
      currentTask.status = Status.DONE;
    }
    return of(currentTask);
  }

}
