import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.scss"]
})
export class ButtonsComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<string>();
  count = 0;

  constructor() {}

  start() {
    this.count++;
    this.clickEvent.emit("s");
  }

  test($event: MouseEvent) {
    console.log($event);
  }

  ngOnInit(): void {}
}
