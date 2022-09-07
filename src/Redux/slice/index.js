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
    }
});

export const getUsers = ( username )=> async(dispatch) => {
    try {
        // var json = await axios.get(ROUTE + username + '&page='+ slice.initialState.page + '&per_page' + 5)
        var json = await axios.get(ROUTE + username + '&page=' + slice.getInitialState().page + '&per_page=' + 10 )

        dispatch(slice.actions.getUsers(json.data))
    } catch (e) {
        console.log(e)
    }
};