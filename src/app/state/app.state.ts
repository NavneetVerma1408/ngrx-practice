import { CartState } from "./cart/cart.reducer";

export interface AppState {
    counter: number
    cart: CartState
}