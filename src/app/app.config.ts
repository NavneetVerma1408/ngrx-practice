import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer';
import { provideHttpClient } from '@angular/common/http';
import { CartReducer } from './state/cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideStore(),
  provideHttpClient(),
  provideState({ name: 'counter', reducer: counterReducer }),
  provideState({ name: 'cart', reducer: CartReducer }),
  ]
};
