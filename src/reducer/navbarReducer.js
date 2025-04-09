import { createSlice } from "@reduxjs/toolkit";



export const NavbarSlice=createSlice({
    name:"navbar",
    initialState:{navState:"unactive"},
    reducers:{
        setNavState:(state,action)=>{
            state.navState=action.payload
        }
    }
})
export const navReducer=NavbarSlice.reducer;
export const {setNavState}=NavbarSlice.actions