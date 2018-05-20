import { Component,  Input  } from '@angular/core';
import { Task } from './task.module';
import { BrowserModule } from '@angular/platform-browser';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  newtask = '';
  timer;
  maxETA = 60;
  constructor() {
    /*for (let index = 0; index < 5; index++) {
      this.tasks.push(new Task(index.toString()));
    }*/
  }

  addTask() {
    this.tasks.splice(0, 0, new Task(this.newtask, this.maxETA));
    // _.reverse(this.tasks);
  }


}