import { configureStore } from "@reduxjs/toolkit";
import { navReducer } from "./src/reducer/navbarReducer";
export const store=configureStore({
    reducer:{
        navbar:navReducer
    }
})