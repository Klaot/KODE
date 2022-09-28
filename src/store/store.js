import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterAndSort';


export const store = configureStore({
    reducer: {
        filter,
    }
});