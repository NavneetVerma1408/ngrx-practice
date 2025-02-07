import { createAction, props } from "@ngrx/store";
import { Product } from "../../shared/models/product";

export const storeProduct = createAction('product | storeProduct', props<{ products: Product[] }>())