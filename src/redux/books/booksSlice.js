import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';

const BOOK_URL = "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xBZyEErO2xc5gxLcugVF/books/"

const initialState = {
  booksList: [],

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
      state.booksList = state.booksList.filter((book) => book.item_id !== action.payload);
    },

  },

  extraReducers(builder) {
    builder
      .addCase(fetchBooksApi.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchBooksApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.booksList = [...action.payload];
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
  console.log(params)
  let newBook = {
    item_id: nanoid(),
    title:params.title,
    author:params.author,
    category: getCategory(),
  }

  
  dispatch(addBook(newBook))

  //! Endpoint logic here
  const response = await fetch(BOOK_URL,{
    method:'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(newBook)
  })

  return response.json()

});

export const fetchBooksApi = createAsyncThunk('books/fetchBooksApi', async ()=>{
    let booksArray  = []
  const response = await fetch(BOOK_URL)
    const data = await response.json()
    // console.log(data);
    for (const [key,value] of Object.entries(data)){
      booksArray.push({item_id:key, title:value[0].title,author:value[0].author, category:value[0].category})
    }
    
    return booksArray
})

export const deleteBookApi = createAsyncThunk('books/deleteBookApi', async(params,{dispatch})=>{
  dispatch(deleteBook(params))
  //! Async logic here
  let response = await fetch(BOOK_URL+params, {
    method:'DELETE'
  })

})
