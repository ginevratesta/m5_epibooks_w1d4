import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    loading: true,
    error: null,
    searchBook: '',
    filteredBooks: [],
  },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSearchBook: (state, action) => {
      state.searchBook = action.payload;
    },
    setFilteredBooks: (state, action) => {
      state.filteredBooks = action.payload;
    },
    clearSearchBook: (state) => {
      state.searchBook = '';
    },
    handleInputChange: (state, action) => {
      state.searchBook = action.payload;
    },
    handleSearch: (state) => {
      const { books, searchBook } = state;
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(searchBook.toLowerCase())
      );
      state.filteredBooks = filtered;
      state.searchBook = ''; 
    }
  },
});

export const { setBooks, setError, setSearchBook, setFilteredBooks, clearSearchBook, handleInputChange, handleSearch } = bookSlice.actions;

export default bookSlice.reducer;
