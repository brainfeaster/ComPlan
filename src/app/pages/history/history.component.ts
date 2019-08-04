import { Component, OnInit } from '@angular/core';
import { Warehouse } from 'ngx-warehouse';
import { OfflineService } from '../../core/offline.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  public keys: string[];
  constructor(public warehouse: Warehouse,
    public offsvc: OfflineService) { }

  ngOnInit() {
    this.warehouse.keys().subscribe(
      data => {
        this.keys = data; 
      },
      error => console.log(error)
    );
  }

  refresh(){
    this.warehouse.keys().subscribe(
      data => {
        this.keys = data; 
      },
      error => console.log(error)
    )
  }

}
