import { createSlice } from "@reduxjs/toolkit";
import { useEffect,useState } from "react";
import Cookies from 'js-cookie';


const initialState = {
    list : [],
}

const savedList = Cookies.get("listcard");

if (savedList) {
    initialState.list = JSON.parse(savedList);
    }

export const listSlice  = createSlice({
    name:"listitem",
    initialState,
    reducers:{
        addItemToList(state, action) {
            const existingProduct = state.list.find(item => item.id === action.payload.id)
            if(!existingProduct){
                state.list.push(action.payload);
                Cookies.set("listcard", JSON.stringify(state.list))
            }
          },
          removeItemFromList(state, action) {
            state.list = state.list.filter(item => item.id !== action.payload.id);
            Cookies.set("listcard", JSON.stringify(state.list));
          },
    }
})

export const { addItemToList, removeItemFromList } = listSlice.actions;
export default listSlice.reducer;







