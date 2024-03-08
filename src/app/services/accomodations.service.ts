import { Injectable } from "@angular/core"
import data from "../data/housing.json"
import { Accomodation } from "../models/accomodation.model"

@Injectable({
  providedIn: "root",
})
export class AccomodationsService {
  accomodations: Accomodation[] = data

  getAllAccomodations(): Accomodation[] {
    console.log(this.accomodations)
    return this.accomodations
  }
}
