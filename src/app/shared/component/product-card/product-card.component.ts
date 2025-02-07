import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToCart, cartProductDecrement, cartProductIncrement } from '../../../state/cart/cart.action';
import { RouterLink } from '@angular/router';
import { qtyInCartProd } from '../../../state/cart/cart.selector';
import { Observable } from 'rxjs';
import { addToWishlist, removeFromWishlist } from '../../../state/wishlist/wishlist.action';
import { qtyInwishlistProd } from '../../../state/wishlist/wishlist.selector';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, CommonModule, AsyncPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: Product = new Product()

  constructor(public readonly store: Store<any>) {
  }

  addToCart(product: Product) {
    this.store.dispatch(addToCart({ product: product }));
  }

  increment(productId: number) {
    this.store.dispatch(cartProductIncrement({ productId: productId }))
  }

  decrement(productId: number) {
    this.store.dispatch(cartProductDecrement({ productId: productId }))
  }

  qtyInCartProd(product: Product): Observable<number> {
    return this.store.select(qtyInCartProd(product));
  }

  addToWishlist(product: Product) {
    this.store.dispatch(addToWishlist({ product: product }));
  }

  removeFormWishlist(product_id: number) {
    this.store.dispatch(removeFromWishlist({ productId: product_id }));
  }

  qtyInWishlistProd(product: Product): Observable<number> {
    return this.store.select(qtyInwishlistProd(product));
  }

}
