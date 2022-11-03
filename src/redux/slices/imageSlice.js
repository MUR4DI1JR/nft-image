import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchImage = createAsyncThunk('image/fetchImage', async ( thunkAPI) =>{
    const {data} = await axios.get('/assets');
    return data.assets;
})

const initialState = {
    items: [],
    status: 'loading'
}

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        setItems(state, action){
            state.items = action.payload;
        }
    },
    extraReducers: {
        [fetchImage.pending]: (state) =>{
            state.status = "loading";
            state.items = [];
        },
        [fetchImage.fulfilled]: (state, action) =>{
            state.items = action.payload;
            state.status = "success";
        },
        [fetchImage.rejected]: (state) =>{
            state.status = "error";
            state.items = [];
        }
    }
});

export const selectImageData = (state) => state.image;

export const {setItems} = imageSlice.actions;

export default imageSlice.reducer;