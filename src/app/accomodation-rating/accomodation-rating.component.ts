import { NgFor } from "@angular/common"
import { Component, Input } from "@angular/core"

@Component({
  selector: "app-accomodation-rating",
  standalone: true,
  imports: [NgFor],
  templateUrl: "./accomodation-rating.component.html",
  styleUrl: "./accomodation-rating.component.css",
})
export class AccomodationRatingComponent {
  @Input() rating!: string

  range = [1, 2, 3, 4, 5]

  getStars(rating: string): number[] {
    return this.range
      .map((elem) => (Number(rating) >= elem ? elem : 0))
      .filter((elem) => elem !== 0)
  }

  getEmptyStars(rating: string): number[] {
    const count = 5 - Number(rating)
    return Array(count).fill(0)
  }
}
