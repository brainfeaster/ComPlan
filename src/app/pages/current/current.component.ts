import { Component, OnInit } from '@angular/core';
import { Task } from '../../core/models/task.model';
import { Warehouse } from 'ngx-warehouse';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
  tasks: Task[] = [];
  newtask = '';
  timer;
  maxETA = 60;
  instance;
  constructor(public warehouse: Warehouse) { }

  ngOnInit() {
  }
  addTask() {
    this.tasks.splice(0, 0, new Task(this.newtask, this.maxETA));
    this.warehouse.set('task' + this.tasks.length, new Task(this.newtask, this.maxETA));
    this.newtask ="";
  }

}
