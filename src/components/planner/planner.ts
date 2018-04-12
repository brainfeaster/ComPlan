import { Component } from '@angular/core';

/**
 * Generated class for the PlannerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'planner',
  templateUrl: 'planner.html'
})
export class PlannerComponent {
  private today= new Date();
  text: string;
  currentDate: any= Date.now();
  constructor() {
    console.log('Hello PlannerComponent Component');
    this.text = 'Hello World';
  }

  isReadOnly(time){
    let currentTime=this.today.getHours();
    if(currentTime > time){
      return true;
    }
    return false;
  }

}
