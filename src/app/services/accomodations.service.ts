import { Injectable } from "@angular/core"
import data from "../data/housing.json"
import { Accomodation } from "../models/accomodation.model"

@Injectable({
  providedIn: "root",
})
export class AccomodationsService {
  accomodations: Accomodation[] = data

  getAllAccomodations(): Accomodation[] {
    return this.accomodations
  }

  getAccomodationById(accId: string): Accomodation {
    const accomodation: Accomodation | undefined = this.accomodations.find(
      (acc) => acc?.id === accId
    )
    if (!accomodation) {
      throw new Error("accomodation not found")
    } else {
      return accomodation
    }
  }
}
