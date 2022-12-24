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
    addBook: (state, action) => {
        state.booksList.push(action.payload);
      },
  
  
    deleteBook: (state, action) => {
      state.booksList = state.booksList.filter((book) => book.id !== action.payload);
    },

  },

  extraReducers(builder) {
    builder
      .addCase(fetchBooksApi.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchBooksApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.booksList = action.payload;
      })
      .addCase(fetchBooksApi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectBooks = (state) => state.books.booksList;

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;

export const addBookApi = createAsyncThunk('books/addBookApi', async (params, {dispatch}) => {

  let newBook = {
    id: nanoid(),
    title:params.title,
    author:params.author,
    category: getCategory(),
  }
  
  dispatch(addBook(newBook))

  //! Endpoint logic here
  // const response = await

});

export const fetchBooksApi = createAsyncThunk('books/fetchBooksApi', async ()=>{
  //do thigs hee
})

export const deleteBookApi = createAsyncThunk('books/deleteBookApi', async(params,{dispatch})=>{
  console.log("deleteBookApi called")
  dispatch(deleteBook(params))
  //! Async logic here
})
