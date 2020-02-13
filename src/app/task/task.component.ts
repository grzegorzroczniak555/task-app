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

  tasks: Task[] = [];

  constructor(public taskService: TaskService) { }

  ngOnInit() { }

  getId(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  addTask() {
    const name = this.taskForm.get('name').value;
    const description = this.taskForm.get('description').value;
    const task = new Task(this.getId(1,500), name, description);
    this.taskService.addTask(task)
      .subscribe(tasks => {
        this.tasks = tasks;
      });
    this.taskForm.reset();
      }
  }





