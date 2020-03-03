import { Component, OnInit, SimpleChange } from "@angular/core";

@Component({
  selector: "app-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.scss"]
})
export class SectionComponent implements OnInit {
  constructor() {}

  present = 0;

  startTime($event) {
    this.present = $event;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
  }
}
