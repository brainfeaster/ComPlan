import { Component, Input, OnInit } from '@angular/core';
import { Task } from './core/models/task.model';
import { BrowserModule } from '@angular/platform-browser';
import * as _ from 'lodash';
import { Warehouse } from 'ngx-warehouse';
import * as $ from 'jquery';
import { CurrentComponent } from './pages/current/current.component';
import { HistoryComponent } from './pages/history/history.component';
import { OfflineService } from './core/offline.service';
declare var M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(public warehouse: Warehouse,
    public  offsvc: OfflineService) {
    /*for (let index = 0; index < 5; index++) {
      this.tasks.push(new Task(index.toString()));
    }*/
  }
  ngOnInit() {
    const elem = document.querySelector('.tabs');
    const options = {
    };
    M.Tabs.init(elem, options);

    // const testObject: any = {
    //   anArray: [
    //     'first string',
    //     'another string',
    //     'and even one more'
    //   ],
    //   aNumber: 2,
    //   anObject: {
    //     nestedValue: {
    //       key: 'Woah this is nested!'
    //     }
    //   }
    // };

    // this.warehouse.set('test', testObject);

    // this.warehouse.get('test').subscribe(data => {
    //    console.log('data');
    //    console.log(data);
    //  });
  }

  confirm() {
    this.warehouse.keys().subscribe(
      data => {
        this.offsvc.keys = data;
        console.log(this.offsvc.keys)
      },
      error => console.log(error)
    )
  }
}
