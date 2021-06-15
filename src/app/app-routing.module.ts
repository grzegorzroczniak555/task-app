import { DoneTasksComponent } from './task/done-tasks/done-tasks.component';
import { TaskComponent } from './task/task.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: 'tasks', children: [
      {path: '', pathMatch: 'full',  component: TaskComponent},
      {path: 'done', component: DoneTasksComponent}
    ]},
    {path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
