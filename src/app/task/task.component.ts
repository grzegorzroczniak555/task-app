import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
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

  taskToDo: Task[];

  constructor() { }

  ngOnInit() {
  }

   addTask(name: string, description: string): void {
     // this.taskToDo.push(this.Taskform.patchValue({
      this.taskForm.setValue({name: `${name}`});
      this.taskForm.setValue({description: `${description}`});
      this.taskToDo.push(this.taskForm.value);
     // }));
     // console.log(this.taskToDo);
   }



}
