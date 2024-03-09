import { Component, Input } from "@angular/core"
import { Accomodation } from "../models/accomodation.model"
import { CollapseComponent } from "../collapse/collapse.component"
import { NgFor } from "@angular/common"
import { AccomodationTagsComponent } from "../accomodation-tags/accomodation-tags.component"

@Component({
  selector: "app-accomodation-card",
  standalone: true,
  imports: [CollapseComponent, NgFor, AccomodationTagsComponent],
  templateUrl: "./accomodation-card.component.html",
  styleUrl: "./accomodation-card.component.css",
})
export class AccomodationCardComponent {
  @Input() accomodation!: Accomodation
}
