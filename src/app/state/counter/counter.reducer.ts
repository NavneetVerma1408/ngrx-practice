import { createReducer, on } from "@ngrx/store"
import *  as CounterAction from "./counter.action"


let count = 0
export const counterReducer = createReducer(
    count,
    on(CounterAction.increment, (state) => {
        state++;
        return state
    }),
    on(CounterAction.decrement, (state) => {
        state--
        return state
    }),
    on(CounterAction.reset, (state) => {
        return 0
    })
);
