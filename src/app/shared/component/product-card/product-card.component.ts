import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToCart } from '../../../state/cart/cart.action';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: Product = new Product()

  constructor(private readonly store: Store) {
  }


  addToCart(product: Product) {
    this.store.dispatch(addToCart({ product: product }));
  }
}
