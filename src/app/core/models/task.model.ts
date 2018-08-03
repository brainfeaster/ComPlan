
export class Task {
    name: string;
    eta: number;
    binker_flag = false;
    binker_switch = false;
    timer;
    blinker;
    constructor(name, etaMAX) {
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
