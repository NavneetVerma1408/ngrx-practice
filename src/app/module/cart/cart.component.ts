import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product';
import { Store } from '@ngrx/store';
import { cartProducts, cartQuantity, cartTotalAmount } from '../../state/cart/cart.selector';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartProductsList$!: Observable<Product[]>
  cartQuantity$: Observable<number>
  cartTotalAmount$: Observable<number>

  constructor(private readonly store: Store<any>) {
    this.cartProductsList$ = this.store.select(cartProducts)
    this.cartQuantity$ = this.store.select(cartQuantity)
    this.cartTotalAmount$ = this.store.select(cartTotalAmount)
  }
}
