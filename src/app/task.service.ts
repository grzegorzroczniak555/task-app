import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from './task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(
    private http: HttpClient) { }


getTasks(): Observable<Task[]> {
  return this.http.get<Task[]>(URL);
}

getInProgressTasks(): Observable<Task[]> {
  return this.http.get<Task[]>(URL);
}

getDoneTasks(): Observable<Task[]> {
  return this.http.get<Task[]>(URL);
}

addTask(task: Task): Observable<Task> {
  return this.http.post<Task>(URL, task);
}

}
