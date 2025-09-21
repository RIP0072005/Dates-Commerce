import { Component } from '@angular/core';
import { VarsService } from '../vars.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { products } from '../shop/shop.component';
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  constructor(public _VarsService: VarsService){}
  ps = products  
}
