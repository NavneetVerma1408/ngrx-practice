import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProductCardComponent } from '../../shared/component/product-card/product-card.component';
import { Product } from '../../shared/models/product';
import { Store } from '@ngrx/store';
import { getProducts } from '../../state/product/product.selector';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, ProductCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  productList$!: Observable<Product[]>
  constructor(private readonly store: Store<any>) {
    this.getproducts()
  }

  getproducts() {
    this.productList$ = this.store.select(getProducts)
    
  }
}
