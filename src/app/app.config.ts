import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer';
import { provideHttpClient } from '@angular/common/http';
import { CartReducer } from './state/cart/cart.reducer';
import { WishlistReducer } from './state/wishlist/wishlist.reducer';
import { ProductReducer } from './state/product/product.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideStore(),
  provideHttpClient(),
  provideState({ name: 'counter', reducer: counterReducer }),
  provideState({ name: 'cart', reducer: CartReducer }),
  provideState({ name: 'wishlist', reducer: WishlistReducer }),
  provideState({ name: 'products', reducer: ProductReducer }),
  ]
};

