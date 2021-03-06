import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Task } from './task/task';
import { Status } from './task/status';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];
  public doneTasksSubject = new Subject<void>();

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

  getDoneTasks(): Observable<Task[]> {
    const doneTasks = this.tasks.filter(t => t.status === Status.DONE);
    return of(doneTasks);
  }

  finishTask(task: Task): Observable<Task> {
    const currentTask = this.tasks.filter(t => t.id === task.id)[0];
    if (!!currentTask) {
      currentTask.status = Status.DONE;
      this.doneTasksSubject.next();
    }
    return of(currentTask);
  }

}
