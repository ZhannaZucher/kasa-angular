import { NgClass, NgIf } from "@angular/common"
import { Component, Input, OnInit } from "@angular/core"

@Component({
  selector: "app-collapse",
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: "./collapse.component.html",
  styleUrl: "./collapse.component.css",
})
export class CollapseComponent implements OnInit {
  @Input() classModifier: boolean = false
  @Input() title!: string
  isOpen!: boolean

  ngOnInit(): void {
    this.isOpen = false
  }

  onClickCollapse(): void {
    this.isOpen ? (this.isOpen = false) : (this.isOpen = true)
    console.log(this.isOpen)
  }
}
