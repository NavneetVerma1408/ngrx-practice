import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Product } from "../../shared/models/product";

const cartSelector = (state: AppState) => state.cart

export const cartProducts = createSelector(
    cartSelector,
    (state) => state.cartProducts
)

export const cartQuantity = createSelector(
    cartSelector,
    (state) => state.cartProducts.length
)

export const cartTotalAmount = createSelector(
    cartSelector,
    (state) => state.cartAmount
)
export const qtyInCartProd = (product: Product) =>
    createSelector(
        cartSelector,
        (cartState) => {
            const cartProduct = cartState.cartProducts.find((p) => p.product_id === product.product_id);
            return cartProduct ? cartProduct.quantity : 0;
        }
    );
