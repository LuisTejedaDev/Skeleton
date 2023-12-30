import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import {orientationSlice} from './slices';
import appSlice from './slices/appSlice';

export const store = configureStore({
    reducer: {
        navApp: appSlice,
    }
}, applyMiddleware(thunk))