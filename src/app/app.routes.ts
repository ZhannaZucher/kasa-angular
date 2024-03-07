import { Routes } from "@angular/router"
import { HomePageComponent } from "./home-page/home-page.component"
import { AboutPageComponent } from "./about-page/about-page.component"
import { AccomodationPageComponent } from "./accomodation-page/accomodation-page.component"
import { ErrorPageComponent } from "./error-page/error-page.component"

export const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "about", component: AboutPageComponent },
  { path: "accomodation/:id", component: AccomodationPageComponent },
  { path: "**", pathMatch: "full", component: ErrorPageComponent },
]
