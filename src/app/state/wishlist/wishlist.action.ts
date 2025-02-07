import { createAction, props } from "@ngrx/store";
import { Product } from "../../shared/models/product";

export const addToWishlist = createAction('wishlist | addToWishlist', props<{ product: Product }>())
export const removeFromWishlist = createAction('wishlist | removeFromwishlist', props<{ productId: number }>())