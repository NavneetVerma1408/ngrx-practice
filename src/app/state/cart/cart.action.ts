import { createAction, props } from "@ngrx/store";
import { Product } from "../../shared/models/product";

export const addToCart = createAction('cart | addToCart', props<{ product: Product }>())
export const cartProductIncrement = createAction('cart | cartProductIncrement', props<{ productId: number }>())
export const cartProductDecrement = createAction('cart | cartProductDecrement', props<{ productId: number }>())
export const removeFromCart = createAction('cart | removeFromCart', props<{ productId: number }>())