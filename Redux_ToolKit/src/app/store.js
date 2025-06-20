// 1 //
import {configureStore} from '@reduxjs/toolkit';
// 2 //
import todoReducer from '../feature/todo/todoSlice';

// 1 //
export const store= configureStore({
    // reference only not call 
    reducer: todoReducer
})
