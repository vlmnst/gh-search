import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const ROUTE = process.env.REACT_APP_USER_SEARCH

export const slice = createSlice({
    name : "USERS",
    initialState : {
        users: [],
        repos: [],
        orgs: [],
        page: 2
    },
    reducers:{
        getUsers(state,action){
            state.users = action.payload
        },
        getRepos(state, action) {
            state.repos = action.payload
        },
        getOrgs(state, action) {
            state.orgs = action.payload
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

export const getRepos = ( url ) => async(dispatch) => {
    try {
        var json = await axios.get(url)
        dispatch(slice.actions.getRepos(json.data))
    } catch (error) {
        console.log(error)
    }
};

export const getOrgs = ( url ) => async(dispatch) => {
    try {
        var json = await axios.get(url)
        dispatch(slice.actions.getOrgs(json.data))
    } catch (error) {
        console.log(error)
    }
}

export const { clean } = slice.actions;