import { createReducer, on } from "@ngrx/store";
import { Product } from "../../shared/models/product";
import * as CartAction from "./cart.action";

export interface CartState {
    cartProducts: Product[];
    cartAmount: number;
}

export const initialCartState: CartState = {
    cartProducts: [],
    cartAmount: 0,
};

export const CartReducer = createReducer(
    initialCartState,
    on(CartAction.addToCart, (state, { product }) => {
        const productIndex = state.cartProducts.findIndex((prod: Product) => prod.product_id == product.product_id);

        let updatedCartProducts;
        let updatedCartAmount;

        if (productIndex !== -1) {
            // Update quantity for existing product
            updatedCartProducts = state.cartProducts.map((p, index) =>
                index === productIndex
                    ? { ...p, quantity: p.quantity + 1 }
                    : p
            );
        } else {
            updatedCartProducts = [
                ...state.cartProducts,
                { ...product, quantity: 1, isAddedToCart: true }
            ];
        }

        updatedCartAmount = state.cartAmount + product.price;

        return {
            ...state,
            cartProducts: updatedCartProducts,
            cartAmount: updatedCartAmount,
        };
    }),

    on(CartAction.cartProductIncrement, (state, { productId }) => {
        const updatedCartProducts = state.cartProducts.map(product =>
            product.product_id === productId
                ? { ...product, quantity: product.quantity + 1 }
                : product
        );

        const product = state.cartProducts.find(p => p.product_id === productId);
        const updatedCartAmount = state.cartAmount + (product ? product.price : 0);

        return {
            ...state,
            cartProducts: updatedCartProducts,
            cartAmount: updatedCartAmount,
        };
    }),

    on(CartAction.cartProductDecrement, (state, { productId }) => {
        const updatedCartProducts = state.cartProducts
            .map(product =>
                product.product_id === productId
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
            .filter(product => product.quantity > 0); // Remove product if quantity becomes 0

        const product = state.cartProducts.find(p => p.product_id === productId);
        const updatedCartAmount = state.cartAmount - (product ? product.price : 0);

        return {
            ...state,
            cartProducts: updatedCartProducts,
            cartAmount: updatedCartAmount,
        };
    })
);
