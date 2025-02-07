import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Product } from "../../shared/models/product";

const wishlistSelector = (state: AppState) => state.wishlist

export const wishlistProducts = createSelector(
    wishlistSelector,
    (state) => state.wishlistProducts
)

export const wishlistQuantity = createSelector(
    wishlistSelector,
    (state) => state.wishlistProducts.length
)

export const wishlistTotalAmount = createSelector(
    wishlistSelector,
    (state) => state.wishlistAmount
)
export const qtyInwishlistProd = (product: Product) =>
    createSelector(
        wishlistSelector,
        (wishlistState) => {
            const wishlistProduct = wishlistState.wishlistProducts.find((p) => p.product_id === product.product_id);
            return wishlistProduct ? wishlistProduct.quantity : 0;
        }
    );
