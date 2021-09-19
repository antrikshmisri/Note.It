import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

export const store = configureStore({
    reducer: rootReducer,
    enhancers: [
        // Add other store enhancers here...
    ],
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== 'production'
});