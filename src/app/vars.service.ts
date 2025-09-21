import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VarsService {

  constructor() { }
  favorites = signal<number>(0)
  sales = signal<number>(0);
  is_fav = signal<boolean>(false);
  is_sale = signal<boolean>(false);
  inc_sales(){
    this.sales.update(v => v + 1);
  }
  inc_favorites(){
    this.favorites.update(v => v + 1);
  }
  dec_sales(){
    this.sales.update(v => v - 1);
  }
  dec_favorites(){
    this.favorites.update(v => v - 1);
  }
}
