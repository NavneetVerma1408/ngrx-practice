import { createReducer, on } from "@ngrx/store";
import { Product } from "../../shared/models/product";
import * as WishlistAction from "./wishlist.action";
export interface WishlistState {
    wishlistProducts: Product[];
    wishlistAmount: number;
}

export const initialWishlistState: WishlistState = {
    wishlistProducts: [],
    wishlistAmount: 0,
};

export const WishlistReducer = createReducer(
    initialWishlistState,
    on(WishlistAction.addToWishlist, (state, { product }) => {
        const productIndex = state.wishlistProducts.findIndex((prod: Product) => prod.product_id == product.product_id);

        let updatedWishlistProducts;
        let updatedwishlistAmount;

        if (productIndex !== -1) {
            updatedWishlistProducts = state.wishlistProducts.map((p, index) =>
                index === productIndex
                    ? { ...p, quantity: p.quantity + 1 }
                    : p
            );
        } else {
            updatedWishlistProducts = [
                ...state.wishlistProducts,
                { ...product, quantity: 1, isAddedTowishlist: true }
            ];
        }

        updatedwishlistAmount = state.wishlistAmount + product.price;

        return {
            ...state,
            wishlistProducts: updatedWishlistProducts,
            wishlistAmount: updatedwishlistAmount,
        };
    }),

    on(WishlistAction.removeFromWishlist, (state, { productId }) => {
        const productIndex = state.wishlistProducts.findIndex((prod: Product) => prod.product_id == productId);
        let updatedWishlistProducts = [...state.wishlistProducts].filter((prod:Product)=>prod.product_id!=productId)
        let updatedwishlistAmount = state.wishlistAmount - state.wishlistProducts[productIndex].price;
        return {
            ...state,
            wishlistProducts: updatedWishlistProducts,
            wishlistAmount: updatedwishlistAmount,
        };
    }),
);
