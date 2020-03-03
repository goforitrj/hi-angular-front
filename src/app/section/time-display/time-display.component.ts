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

  test = 1;

  constructor() {
    console.log(this.inputData);
    // setInterval(() => {
    //   this.test += 1;
    //   // let timer = new timer();
    //   // this.test = timer.time;
    // }, 1000);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
  }
}
