import { createSlice } from "@reduxjs/toolkit";

const filteredSlice = createSlice({
    name: "filtered",
    initialState:{
        filtered:[],
    },
    reducers:{
        getFiltered(state,action){
            state.filtered= action.payload;
        },
        clearFiltered(state) {
            state.filtered = [];
        },
    },
})

export const { getFiltered, clearFiltered } = filteredSlice.actions;

export default filteredSlice.reducer;