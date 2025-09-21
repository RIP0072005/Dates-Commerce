import { Component } from '@angular/core';
import { VarsService } from '../vars.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { products } from '../shop/shop.component';
@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
  constructor(public _VarsService: VarsService){}
  ps = products;
}
