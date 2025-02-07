import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product';
import { Store } from '@ngrx/store';
import { wishlistProducts, wishlistQuantity, wishlistTotalAmount } from '../../state/wishlist/wishlist.selector';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  wishlistProductsList$!: Observable<Product[]>
  wishlistQuantity$: Observable<number>
  wishlistTotalAmount$: Observable<number>

  constructor(private readonly store: Store<any>) {
    this.wishlistProductsList$ = this.store.select(wishlistProducts)
    this.wishlistQuantity$ = this.store.select(wishlistQuantity)
    this.wishlistTotalAmount$ = this.store.select(wishlistTotalAmount)
  }
}
