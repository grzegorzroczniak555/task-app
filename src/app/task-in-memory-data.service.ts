import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskInMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [];
    return {tasks};
  }

  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }

}
