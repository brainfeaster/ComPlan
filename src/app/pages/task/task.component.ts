import { Component, OnInit, Input } from '@angular/core';
import { Warehouse } from 'ngx-warehouse';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() taskname: string;
  public taskdetails: any;
  constructor(public warehouse: Warehouse) { }

  ngOnInit() {
    this.warehouse.get(this.taskname).subscribe(data => {
      this.taskdetails = data;
    });
  }

}
