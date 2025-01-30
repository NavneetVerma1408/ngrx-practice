import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProductCardComponent } from '../../shared/component/product-card/product-card.component';
import { Product } from '../../shared/models/product';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, ProductCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  productList$!: Observable<Product[]>
  constructor(private readonly http: HttpClient) {
    this.getProductList()
  }

  getProductList() {
    this.productList$ = this.http.get<Product[]>('https://fake-store-api.mock.beeceptor.com/api/products').pipe(map((products: Product[]) => {
      return products.map((product: Product) => {
        product.image = 'https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          product.quantity = 0
        return product
      })
    }))
  }
}
