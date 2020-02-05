import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  taskToDo: Task[];

  constructor() { }

  ngOnInit() {
  }

   addTask(name: Task, description: Task) {
     this.taskToDo.push(name, description);
   }

}
