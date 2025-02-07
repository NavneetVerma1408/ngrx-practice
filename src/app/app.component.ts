import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount } from './state/counter/counder.selecter';
import { AsyncPipe, CommonModule } from '@angular/common';
import { decrement, increment, reset } from './state/counter/counter.action';
import { HeaderComponent } from './shared/component/header/header.component';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from './shared/models/product';
import { storeProduct } from './state/product/product.action';
import { getdisableBackground } from './state/common.state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, HeaderComponent, RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx'
  secretKey = 'AIzaSyCIC8O3L_0tjTtJCSOO-9phy9pz-b_y25A'
  count$: Observable<number>
  adddress: string = '';
  isDisabled: boolean = false
  constructor(private readonly store: Store<any>, private readonly http: HttpClient) {
    this.count$ = this.store.select(selectCount)
    this.getProductList()
  }
  name = 'Angular';
  lat: number = 0;
  lng: number = 0;

  ngOnInit(): void {
    this.getLocation();
    getdisableBackground().subscribe((res: boolean) => {
      this.isDisabled = res
    })
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.getAddress()
        }
      },
        (error: any) => console.log(error));
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getAddress() {
    this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.lat},${this.lng}&key=${this.secretKey}`).subscribe({
      next: ((res: any) => {
        this.adddress = res.results[0].formatted_address || ''
      }),
      error: ((error: any) => {
      })
    })
  }

  products: Product[] = [
    {
      product_id: 1,
      name: "Casual T-Shirt",
      description: "A comfortable cotton t-shirt, perfect for casual outings.",
      price: 15.99,
      unit: "piece",
      image: "https://example.com/images/tshirt.jpg",
      discount: 10,
      availability: true,
      quantity: 100,
      brand: "ComfortWear",
      category: "Tops",
      rating: 4.5,
      isAddedToCart: false,
      reviews: [
        { reviewer: "Alice", comment: "Soft fabric and fits perfectly!", rating: 5 },
        { reviewer: "John", comment: "Good quality for the price.", rating: 4 },
      ],
    },
    {
      product_id: 2,
      name: "Slim Fit Shirt",
      description: "Stylish slim-fit shirt made from durable denim.",
      price: 49.99,
      unit: "piece",
      image: "https://example.com/images/jeans.jpg",
      discount: 15,
      availability: true,
      quantity: 50,
      brand: "DenimPro",
      category: "Bottoms",
      rating: 4.7,
      isAddedToCart: false,
      reviews: [
        { reviewer: "Emily", comment: "The fit is amazing, and it's super comfortable.", rating: 5 },
        { reviewer: "Mike", comment: "Great quality denim but a bit pricey.", rating: 4 },
      ],
    },
    {
      product_id: 3,
      name: "Funcky Shirt",
      description: "Warm and cozy funcky Shirt with a front pocket and hood.",
      price: 29.99,
      unit: "piece",
      image: "https://example.com/images/sweatshirt.jpg",
      discount: 5,
      availability: true,
      quantity: 70,
      brand: "CozyFit",
      category: "Outerwear",
      rating: 4.6,
      isAddedToCart: false,
      reviews: [
        { reviewer: "Sophia", comment: "Keeps me warm on chilly days.", rating: 5 },
        { reviewer: "James", comment: "Material is slightly thinner than expected.", rating: 4 },
      ],
    },
    {
      product_id: 4,
      name: "Formal Shirt",
      description: "Elegant and breathable shirt for office wear.",
      price: 35.49,
      unit: "piece",
      image: "https://example.com/images/formal-shirt.jpg",
      discount: 20,
      availability: true,
      quantity: 40,
      brand: "StylePro",
      category: "Tops",
      rating: 4.8,
      isAddedToCart: false,
      reviews: [
        { reviewer: "Daniel", comment: "Great fit and looks professional.", rating: 5 },
        { reviewer: "Emma", comment: "Material feels high-quality.", rating: 4.5 },
      ],
    },
    {
      product_id: 5,
      name: "Summer Dress",
      description: "Lightweight and breathable dress for summer days.",
      price: 25.99,
      unit: "piece",
      image: "https://example.com/images/summer-dress.jpg",
      discount: 15,
      availability: true,
      quantity: 60,
      brand: "FashionFlow",
      category: "Dresses",
      rating: 4.3,
      isAddedToCart: false,
      reviews: [
        { reviewer: "Olivia", comment: "Perfect for sunny days.", rating: 5 },
        { reviewer: "Sophia", comment: "Good fit, but color fades slightly.", rating: 4 },
      ],
    },
    {
      product_id: 6,
      name: "Leather Jacket",
      description: "Stylish and durable leather jacket for any season.",
      price: 99.99,
      unit: "piece",
      image: "https://example.com/images/leather-jacket.jpg",
      discount: 10,
      availability: true,
      quantity: 25,
      brand: "UrbanEdge",
      category: "Outerwear",
      rating: 4.9,
      isAddedToCart: false,
      reviews: [
        { reviewer: "Liam", comment: "Excellent quality and looks great!", rating: 5 },
        { reviewer: "Noah", comment: "A bit expensive but worth it.", rating: 4.5 },
      ],
    },
    {
      product_id: 7,
      name: "Jogger Pants",
      description: "Comfortable joggers for casual wear or workouts.",
      price: 22.49,
      unit: "piece",
      image: "https://example.com/images/joggers.jpg",
      discount: 8,
      availability: true,
      quantity: 80,
      brand: "ActiveLife",
      category: "Bottoms",
      rating: 4.4,
      isAddedToCart: false,
      reviews: [
        { reviewer: "Mason", comment: "Very comfortable and stylish.", rating: 5 },
        { reviewer: "Logan", comment: "Elastic band is great for workouts.", rating: 4 },
      ],
    },
    {
      product_id: 8,
      name: "Floral Skirt",
      description: "Charming floral skirt, perfect for parties and outings.",
      price: 19.99,
      unit: "piece",
      image: "https://example.com/images/floral-skirt.jpg",
      discount: 12,
      availability: true,
      quantity: 30,
      brand: "ChicBloom",
      category: "Bottoms",
      rating: 4.2,
      isAddedToCart: false,
      reviews: [
        { reviewer: "Ella", comment: "Lovely design, but sizing runs small.", rating: 4 },
        { reviewer: "Charlotte", comment: "Perfect for summer parties!", rating: 5 },
      ],
    },
    {
      product_id: 9,
      name: "Formal Shirt",
      description: "Soft and cozy formal shirt to keep you warm.",
      price: 12.99,
      unit: "piece",
      image: "https://example.com/images/scarf.jpg",
      discount: 5,
      availability: true,
      quantity: 120,
      brand: "WinterCozy",
      category: "Accessories",
      rating: 4.6,
      isAddedToCart: false,
      reviews: [
        { reviewer: "Amelia", comment: "So warm and stylish!", rating: 5 },
        { reviewer: "Henry", comment: "Good quality for the price.", rating: 4.5 },
      ],
    },
  ];
  getProductList() {
    // this.http.get<Product[]>('https://fake-store-api.mock.beeceptor.com/api/products').subscribe((products: Product[]) => {
    this.store.dispatch(storeProduct({ products: this.products }))
    // })
  }
}
