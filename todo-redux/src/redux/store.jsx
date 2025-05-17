import { configureStore } from '@reduxjs/toolkit';
import reducers from './todoSlice'
export const store=configureStore({
    reducer:{ todos: reducers,}
})