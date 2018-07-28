import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, Pipe, PipeTransform, Input } from '@angular/core';
import { CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NgxWarehouseModule, WarehouseConfig, DRIVER_TYPE } from 'ngx-warehouse';

const config: WarehouseConfig = {
 driver: DRIVER_TYPE.INDEXEDDB,
 name: 'Your App',
 version: 1.0,
 storeName: 'key_value_pairs', // Should be alphanumeric, with underscores.
 description: 'A description of your app'
};

@Pipe({
  name: 'reversearray'
})
export class ReversePipe implements PipeTransform  {
  transform (values) {
    if (values) {
      return values.reverse();
    }
  }
}

@Pipe({
  name: 'minsec'
})
export class MinSec implements PipeTransform {
  transform(value: number): string {
    let rtnvalue = '';
    if ( value > 0) {
      rtnvalue = (Math.floor(value / 60)) + ' min : ' + (value % 60 ) + ' sec';
    } else {
      rtnvalue = ' 0 min : 0 sec';
    }
    return rtnvalue;
  }
}

@Pipe({
  name: 'minsecmobile'
})
export class MinSecMobile implements PipeTransform {
  transform(value: number): string {
    let rtnvalue = '';
    if ( value > 0) {
      rtnvalue = (Math.floor(value / 60)) + ':' + (value % 60 );
    } else {
      rtnvalue = '0:0';
    }
    return rtnvalue;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    MinSec,
    MinSecMobile,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgxWarehouseModule.configureWarehouse(config),
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
