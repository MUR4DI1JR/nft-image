import {configureStore} from "@reduxjs/toolkit";
import image from './slices/imageSlice';


export const store = configureStore({
    reducer:{
        image
    }
})