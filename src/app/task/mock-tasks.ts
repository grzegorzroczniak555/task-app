import { Task } from './task';
import { TaskService } from '../task.service';

export const tasks: Task[] = [];


getTasks(): Task[] {
  return this.tasks;
}

getInProgressTasks(): Task[] {
  return this.tasks.filter(t => t === 0);
}

getDoneTasks() {
  return this.tasks.filter(t => t === 1);
}

addTask(task: Task) {
  this.tasks.push(task);
}
