import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from './task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [];

  constructor() { }


  // getTasks(): Observable<Task[]> {
  // }

  addTask(task: Task): Observable<Task[]> {
    this.tasks.push(task);
    return of (this.tasks);
  }

}
