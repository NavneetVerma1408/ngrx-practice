import { createReducer, on } from "@ngrx/store"
import { Product } from "../../shared/models/product"
import * as CartAction from "./cart.action"

export class CartState {
    cartProduct: Product[] = []
    cartAmount: number = 0
}

export const initialCartState: CartState = {
    cartProduct: [],
    cartAmount: 0,
}

export const CartReducer = createReducer(
    initialCartState,
    on(CartAction.addToCart, (state, { product }) => {
        let updatedProduct={...product}
        updatedProduct.quantity++

        const updatedCartProducts = [...state.cartProduct, updatedProduct];
        return {
            ...state,
            cartProduct: updatedCartProducts,
            cartAmount: 0
        };
    })
);