import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    "../../assets/images/review1.png",
    "../../assets/images/review2.png",
    "../../assets/images/review3.png",
    "../../assets/images/review4.png",
  ]

  currentIndex = 0;
  next(){
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  prev(){
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
