import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  booksList: [{ title: 'Casino Royale', author: 'Ian Fleming', id: 1 }, { title: 'Monsoon', author: 'Wilbur Smith', id: 2 }],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: {
      reducer(state, action) {
        state.booksList.push(action.payload);
      },
      prepare(title, author) {
        return {
          payload: {
            id: nanoid(),
            title,
            author,
          },
        };
      },
    },
    deleteBook: (state, action) => {
      state.booksList = state.booksList.filter((book) => book.id !== action.payload);
    },

  },
});

export const selectBooks = (state) => state.books.booksList;

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
