import { NgClass } from "@angular/common"
import { Component, Input } from "@angular/core"

@Component({
  selector: "app-banner",
  standalone: true,
  imports: [NgClass],
  templateUrl: "./banner.component.html",
  styleUrl: "./banner.component.css",
})
export class BannerComponent {
  @Input() home: boolean = false
}
