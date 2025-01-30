import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

const cartSelector = (state: AppState) => state.cart

export const cartProduct = createSelector(
    cartSelector,
    (state) => state.cartProduct
)

export const cartQuantity = createSelector(
    cartSelector,
    (state) => state.cartProduct.length
)

export const cartTotalAmount = createSelector(
    cartSelector,
    (state) => state.cartAmount
)
