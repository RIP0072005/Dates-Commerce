import { Component } from '@angular/core';
import { VarsService } from '../vars.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(public _VarsService:VarsService){}
scrollToTop() {
  const element = document.getElementById('1');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

}
