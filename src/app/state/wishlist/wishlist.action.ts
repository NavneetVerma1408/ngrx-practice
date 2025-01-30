import { createAction } from "@ngrx/store";

export const addToWishlist = createAction('cart | addToCart')
export const removeFromWishlist = createAction('cart | removeFromWishlist')