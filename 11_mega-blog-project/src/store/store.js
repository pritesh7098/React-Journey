import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth : authSlice, // add more reducers here for posts
        //TODO: add more slices here for posts
    }
});


export default store;