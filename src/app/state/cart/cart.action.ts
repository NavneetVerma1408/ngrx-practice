import { createAction, props } from "@ngrx/store";
import { Product } from "../../shared/models/product";

export const addToCart = createAction('cart | addToCart', props<{ product: Product }>())
export const cartPeroductIncrement = createAction('cart | cartPeroductIncrement', props<{ productId: number }>())
export const cartPeroductDecrement = createAction('cart | cartPeroductDecrement', props<{ productId: number }>())
export const removeFromCart = createAction('cart | removeFromCart', props<{ productId: number }>())