import * as uuid from 'uuid';
export class Task {
    id: string;
    name: string; // name of the task
    eta: number;  // time estimated to complete the task
    binker_flag = false;
    binker_switch = false;
    log:string;
    timer;
    blinker;
    constructor(name, etaMAX) {
        this.id = uuid.v4();
        this.name = name;
        this.eta = etaMAX;
        this.timer = setInterval( () => {
            if (this.eta > 0) {
              this.eta = this.eta - 1;
            } else {
              this.binker_switch = true;
            }
        } , 1000);
        this.blinker = setInterval( () => this.binker_flag = !this.binker_flag , 500);
    }
}
