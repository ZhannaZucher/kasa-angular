import { Component, OnInit } from "@angular/core"
import { BannerComponent } from "../banner/banner.component"
import { NgFor } from "@angular/common"
import { Accomodation } from "../models/accomodation.model"
import { AccomodationsService } from "../services/accomodations.service"
import { AccomodationViewComponent } from "../accomodation-view/accomodation-view.component"

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [NgFor, BannerComponent, AccomodationViewComponent],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.css",
})
export class HomePageComponent implements OnInit {
  accomodations!: Accomodation[]

  constructor(private AccomodationsService: AccomodationsService) {}

  ngOnInit(): void {
    this.accomodations = this.AccomodationsService.getAllAccomodations()
  }
}
