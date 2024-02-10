import React, { useState, useEffect } from 'react';
import BookCardHTML from './AllTheBooks';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://epibooks.onrender.com/romance');
        if (!response.ok) {
            console.log(response.status);
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();

  }, [setBooks]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => <BookCardHTML key = {book.asin} props = {book.title}/> )}
        </ul>
    </div>
  );
}

export default BookList;











// const App = () => {
//   const [bookList, setBookList] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

//   const fetchData = useCallback(async () => {
//     setLoading(true)
//     await sleep(2000);
//     const data = await getAll();
//     setBookList(data)
//     setLoading(false)
//   }, [])

//   useEffect(() => {
//     fetchData()
// }, [fetchData]);

//   return (
//     <div className="App">
//       {
//         loading?<div>sto caricando i dati...</div>:
//         <>
//         <div>ciao, ci sono {bookList.length} libri caricati</div>
//         <h2>ecco la lista dei titoli</h2>
//         {bookList.map(el => <div key={el.asin} >{el.title}</div>)}
//         </>
//     }
      
//     </div>
//   );
// }

// export default App;
