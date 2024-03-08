import { Component, OnInit, Input } from "@angular/core"
import { Accomodation } from "../models/accomodation.model"
import { RouterModule } from "@angular/router"

@Component({
  selector: "app-accomodation-view",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./accomodation-view.component.html",
  styleUrl: "./accomodation-view.component.css",
})
export class AccomodationViewComponent implements OnInit {
  @Input() accomodation!: Accomodation
  constructor() {}

  ngOnInit(): void {}
}
