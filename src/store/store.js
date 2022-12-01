import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterAndSort';
import search from './slices/search';
import activeModal from './slices/activeModal';
import userItem from './slices/userItem';
import users from './slices/getUsersSlice';


export const store = configureStore({
    reducer: {
        filter,
        users,
        search,
        activeModal,
        userItem,
    }
});