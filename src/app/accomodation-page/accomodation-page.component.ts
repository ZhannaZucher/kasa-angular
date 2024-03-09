import { Component, OnInit } from "@angular/core"
import { Accomodation } from "../models/accomodation.model"
import { ActivatedRoute, RouterModule } from "@angular/router"
import { AccomodationsService } from "../services/accomodations.service"
import { AccomodationCardComponent } from "../accomodation-card/accomodation-card.component"
import { GalleryComponent } from "../gallery/gallery.component"

@Component({
  selector: "app-accomodation-page",
  standalone: true,
  imports: [RouterModule, AccomodationCardComponent, GalleryComponent],
  templateUrl: "./accomodation-page.component.html",
  styleUrl: "./accomodation-page.component.css",
})
export class AccomodationPageComponent implements OnInit {
  accomodation!: Accomodation

  constructor(
    private AccomodationsService: AccomodationsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const accId = this.route.snapshot.params["id"]
    this.accomodation = this.AccomodationsService.getAccomodationById(accId)
  }
}
