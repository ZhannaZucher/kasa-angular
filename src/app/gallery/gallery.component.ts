import { Component, Input } from "@angular/core"
import { Accomodation } from "../models/accomodation.model"
import { NgIf } from "@angular/common"

@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [NgIf],
  templateUrl: "./gallery.component.html",
  styleUrl: "./gallery.component.css",
})
export class GalleryComponent {
  @Input() slides!: Accomodation["pictures"]
  currentIndex: number = 0

  goToPrevious = () => {
    const isFirstSlide = this.currentIndex === 0
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1
    this.currentIndex = newIndex
  }
  goToNext = () => {
    const isLastSlide = this.currentIndex === this.slides.length - 1
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1
    this.currentIndex = newIndex
  }
}
