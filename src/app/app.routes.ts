import { Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { CartComponent } from './module/cart/cart.component';
import { WishlistComponent } from './module/wishlist/wishlist.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'wishlist',
        component: WishlistComponent
    },
];
