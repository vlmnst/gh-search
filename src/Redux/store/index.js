import { configureStore } from '@reduxjs/toolkit';
import { slice } from "../slice/index.js";

const store =configureStore({
    reducer:{
        USERS: slice.reducer,
    }
})
export default store
