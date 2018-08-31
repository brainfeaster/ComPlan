import { Component, Input, OnInit } from '@angular/core';
import { Task } from './core/models/task.model';
import { BrowserModule } from '@angular/platform-browser';
import * as _ from 'lodash';
import { Warehouse } from 'ngx-warehouse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];
  newtask = '';
  timer;
  maxETA = 60;
  constructor(public warehouse: Warehouse) {
    /*for (let index = 0; index < 5; index++) {
      this.tasks.push(new Task(index.toString()));
    }*/
  }
  ngOnInit() {

    const testObject: any = {
      anArray: [
        'first string',
        'another string',
        'and even one more'
      ],
      aNumber: 2,
      anObject: {
        nestedValue: {
          key: 'Woah this is nested!'
        }
      }
    };

    this.warehouse.set('test', testObject);

    this.warehouse.get('test').subscribe(data => {
      console.log('data');
      console.log(data);

    });
  }

  addTask() {
    this.tasks.splice(0, 0, new Task(this.newtask, this.maxETA));
    this.warehouse.set('task' + this.tasks.length, new Task(this.newtask, this.maxETA));
    // _.reverse(this.tasks);
  }


}
