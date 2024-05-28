import { configureStore } from "@reduxjs/toolkit";
import PizzaReducer from "./PizzaSlice";
import CartReducer from "./CartSlice";

const store = configureStore({
    reducer : {
        pizza : PizzaReducer ,
        cart : CartReducer
    }
})

export default store


