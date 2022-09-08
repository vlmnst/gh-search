import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const ROUTE = process.env.REACT_APP_USER_SEARCH

export const slice = createSlice({
    name : "USERS",
    initialState : {
        users: [],
        page: 2
    },
    reducers:{
        getUsers(state,action){
            state.users = action.payload
        },
        clean(state,action) {
            state.users = []
        }
    }
});

export const getUsers = ( username )=> async(dispatch) => {
    try {
        var json = await axios.get(ROUTE + username + '&page=' + slice.getInitialState().page + '&per_page=' + 6 )
        dispatch(slice.actions.getUsers(json.data.items))
    } catch (e) {
        console.log(e)
    }
};

export const { clean } = slice.actions;