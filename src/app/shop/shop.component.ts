import { Component } from '@angular/core';
import { Product } from '../product';
import { VarsService } from '../vars.service';

export const products: Product[] = [
  {
    id: 1,
    image:"../../assets/images/shop1.png",
    name:"تمر سيوة",
    price: 140,
    description:"احسن ناس",
    isSale: false,
    isFav: false,
  },
  {
    id: 2,
    image:"../../assets/images/shop2.jpeg",
    name:"6 كيلو رطب سكري",
    price: 1040,
    description:"احسن ناس",
    isSale: false,
    isFav: false,
  },
  {
    id: 3,
    image:"../../assets/images/shop3.jpg",
    name:"أصابع معمول سعودي جوز هند",
    price: 80,
    description:"احسن ناس",
    isSale: false,
    isFav: false,
  },
  {
    id: 4,
    image:"../../assets/images/shop4.jpg",
    name:"أصابع معمول سعودي شيكولاتة",
    price: 80,
    description:"احسن ناس",
    isSale: false,
    isFav: false,
  },
  {
    id: 5,
    image:"../../assets/images/shop5.jpg",
    name:"أصابع معمول سعودي كابتشينو",
    price: 80,
    description:"احسن ناس",
    isSale: false,
    isFav: false,
  },
  {
    id: 6,
    image:"../../assets/images/shop6.jpg",
    name:"أصابع معمول سعودي كراميل",
    price: 80,
    description:"احسن ناس",
    isSale: false,
    isFav: false,
  },
  {
    id: 7,
    image:"../../assets/images/shop7.jpg",
    name:"بسكوت التمر",
    price: 60,
    description:"احسن ناس",
    isSale: false,
    isFav: false,
  },
  {
    id: 8,
    image:"../../assets/images/shop8.jpeg",
    name:"تمر الوادي 5 كيلو",
    price: 495,
    description:"احسن ناس",
    isSale: false,
    isFav: false,
  },
  {
    id: 9,
    image:"../../assets/images/shop9.jpeg",
    name:"تمر بالاسيبريسو محشو لوز",
    price: 60,
    description:"احسن ناس",
    isSale: false,
    isFav: false,
  },
  {
    id: 10,
    image:"../../assets/images/shop10.jpg",
    name:"تمر بالشيكولاتة البني لوز",
    price: 55,
    description:"احسن ناس",
    isSale: false,
    isFav: false,
  },
 ]


@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  p1: Product[] = products
  selectedProduct: any = null;
  constructor(public _VarsService:VarsService){}

  Shopping(product:Product){
    if(!product.isSale)
      this.addShopping();
    else
      this.remShopping();

    this.toggleShopping(product);
  }
  Wishlist(product:Product){
    if(!product.isFav)
      this.addWishlist();
    else
      this.remWishlist();

    this.toggleWishlist(product);
  }

  viewDetails(p: Product){
    this.selectedProduct = p;
  }
  backList(){
    this.selectedProduct = null;
  }
  addShopping(){
      this._VarsService.inc_sales();
    console.log(this._VarsService.sales());
  }
  addWishlist(){
    this._VarsService.inc_favorites();
    console.log(this._VarsService.favorites());
  }

  remShopping(){
    this._VarsService.dec_sales();
    console.log(this._VarsService.sales());
  }
  remWishlist(){
    this._VarsService.dec_favorites();
    console.log(this._VarsService.favorites());
  }

  toggleShopping(product:Product){
    product.isSale = !product.isSale;
  }
  toggleWishlist(product:Product){
    product.isFav = !product.isFav;
  }

}
