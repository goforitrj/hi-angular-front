import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange
} from "@angular/core";
import { timer } from "rxjs";

@Component({
  selector: "app-time-display",
  templateUrl: "./time-display.component.html",
  styleUrls: ["./time-display.component.scss"]
})
export class TimeDisplayComponent implements OnInit {
  @Input() inputData;

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval;

  constructor() {
    console.log(this.inputData);
  }

  timeStart() {
    this.timeInterval = setInterval(() => {
      this.ms++;
    }, 10);
  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.ms = 0;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChange) {
    for (let propName in changes) {
      if (propName === "inputData") {
        switch (changes[propName].currentValue) {
          case "start":
            this.timeStart();
            break;
          case "stop":
            this.timeStop();
            break;
          case "reset":
            this.timeReset();
            break;
          default:
            this.timeStop();
        }
      }
    }
  }
}
