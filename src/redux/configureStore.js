import { configureStore } from '@reduxjs/toolkit';
// import booksReducer from './books/books';
// import categoriesReducer from './categories/categories';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

export default configureStore({
  reducer: {

    books: booksReducer,
    categories: categoriesReducer,

  },
});
