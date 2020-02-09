import { TaskService } from '../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
   taskForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
   });

  taskInProgress: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

   addTask() {
    const name = this.taskForm.get('name').value;
    const description = this.taskForm.get('description').value;
    const task = new Task(1, name, description);
    this.taskInProgress.push(task);
    console.log (this.taskInProgress);
    this.taskForm.reset();
  }



}
