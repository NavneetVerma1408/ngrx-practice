import { createReducer, on } from "@ngrx/store";
import { Product } from "../../shared/models/product";
import * as ProductAction from "./product.action"
export interface ProductState {
    products: Product[]
}

export const initialProductState: ProductState = {
    products: []
}

export const ProductReducer = createReducer(
    initialProductState,
    on(ProductAction.storeProduct, (state, { products }) => {
        let imageArr=['assets/images/f1.jpg','assets/images/f2.jpg','assets/images/f3.jpg','assets/images/f4.jpg','assets/images/f5.jpg','assets/images/f6.jpg','assets/images/f7.jpg','assets/images/f8.jpg','assets/images/n1.jpg',]
        const updatedProducts = products.map((prod: Product,index=0) => {
            return {
                ...prod,
                quantity: 0,
                image: imageArr[index]
            };
        });
        return {
            ...state,
            products: updatedProducts
        }
    })
)

