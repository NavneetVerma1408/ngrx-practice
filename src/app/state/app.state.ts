import { CartState } from "./cart/cart.reducer";
import { ProductState } from "./product/product.reducer";
import { WishlistState } from "./wishlist/wishlist.reducer";

export interface AppState {
    counter: number
    cart: CartState,
    wishlist: WishlistState,
    products: ProductState,
}