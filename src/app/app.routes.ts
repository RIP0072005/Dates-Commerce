import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { StoreComponent } from './store/store.component';
import { BlogComponent } from './blog/blog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ExportComponent } from './export/export.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './register/register.component';
import { LoadingComponent } from './loading/loading.component';
import { MostComponent } from './most/most.component';
import { SpecialComponent } from './special/special.component';
import { OffersComponent } from './offers/offers.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SalesComponent } from './sales/sales.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent, title: 'Home', children: [
        {path: 'most', component: MostComponent, title: 'home-most'},
        {path: 'special', component: SpecialComponent, title: 'home-specials'},
        {path: 'offers', component: OffersComponent, title: 'home-offers'},
    ]},
    {path: 'shop', component: ShopComponent, title: 'Shop'},
    {path: 'store', component: StoreComponent, title: 'Store'},
    {path: 'blog', component: BlogComponent, title: 'Blog'},
    {path: 'about-us', component: AboutUsComponent, title: 'About us'},
    {path: 'contact-us', component: ContactUsComponent, title: 'Contact us'}, 
    {path: 'export', component: ExportComponent, title: 'Exports'},
    {path: 'register', component: RegisterComponent, title: 'Register'},
    {path: 'loading', component: LoadingComponent, title: 'Loading'},
    {path: 'wishlist', component: FavoritesComponent, title:'Wishlist'},
    {path: 'shopping', component: SalesComponent, title:'Shopping Cart'},
    {path: '**', component: ErrorComponent, title: 'error 404'},
];
