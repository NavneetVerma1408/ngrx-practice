import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderComponent } from '../../shared/component/header/header.component';
import { ProductCardComponent } from '../../shared/component/product-card/product-card.component';
import { Product } from '../../shared/models/product';
import { Store } from '@ngrx/store';
import { cartProduct, cartQuantity, cartTotalAmount } from '../../state/cart/cart.selector';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [AsyncPipe,CurrencyPipe, ProductCardComponent, HeaderComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartProductList$!: Observable<Product[]>
  cartAmount$: Observable<number>
  cartTotalAmount$: Observable<number>

  constructor(private readonly store: Store<any>) {
    this.cartProductList$ = this.store.select(cartProduct)
    this.cartAmount$ = this.store.select(cartQuantity)
    this.cartTotalAmount$ = this.store.select(cartTotalAmount)
  }
}
