import { Component } from "@angular/core"
import { BannerComponent } from "../banner/banner.component"

@Component({
  selector: "app-about-page",
  standalone: true,
  imports: [BannerComponent],
  templateUrl: "./about-page.component.html",
  styleUrl: "./about-page.component.css",
})
export class AboutPageComponent {}
