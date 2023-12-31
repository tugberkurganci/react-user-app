import { configureStore, createSlice } from "@reduxjs/toolkit";
import { loadAuthState, storeAuthState } from "./storage";


const authSlice =createSlice({
    name:'auth',
    initialState: loadAuthState(),
    reducers:{
        
        loginSuccess:(state,action)=>{

            state.id=action.payload.id;
            state.firstName=action.payload.firstName;
            state.email=action.payload.email;
            state.image=action.payload.image;
            state.friendList=action.payload.friendList
        },

        logoutSuccess:(state)=>{

            state.id=0;
            delete state.firstName
            delete state.email
            delete state.image
        },

        addFriend:(state,action)=>{

            state.friendList=[...state.friendList,action.payload]
        }

    }
})

export const store = configureStore({

    reducer :{
        auth:authSlice.reducer
    }
});

store.subscribe(()=>{
    storeAuthState(store.getState().auth)
})



export const{ loginSuccess,logoutSuccess,addFriend}=authSlice.actions;


