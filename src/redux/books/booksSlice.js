import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  booksList: [{ title: 'Casino Royale', author: 'Ian Fleming', id: 1 }, { title: 'Monsoon', author: 'Wilbur Smith', id: 2 }],

  status: 'idle',
  error: null,
};

const getCategory = () => {
  const categories = ['Fiction', 'Biography', 'Science', 'Drama', 'Romance'];
  return categories[Math.floor(Math.random() * categories.length)];
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
            category: getCategory(),
          },
        };
      },
    },
    deleteBook: (state, action) => {
      state.booksList = state.booksList.filter((book) => book.id !== action.payload);
    },

  },

  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.booksList = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectBooks = (state) => state.books.booksList;

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (dispatch) => {
  // const response = await
  dispatch(addBook("Hey","Ho"))
});
