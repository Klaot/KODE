import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterAndSort';
import search from './slices/search';
import activeModal from './slices/activeModal';
import userItem from './slices/userItem';


export const store = configureStore({
    reducer: {
        filter,
        search,
        activeModal,
        userItem,
    }
});