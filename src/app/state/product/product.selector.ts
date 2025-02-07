import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ProductState } from "./product.reducer"; 

const productSelector = (state: AppState) => state.products;

export const getProducts = createSelector(
    productSelector,
    (state: ProductState) => state.products
);