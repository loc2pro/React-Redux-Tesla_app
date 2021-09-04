import {configureStore} from "@reduxjs/toolkit";
import carReducer from '../Features/car/carSlice';

export const store = configureStore({
    reducer: {
        car: carReducer

    },
});