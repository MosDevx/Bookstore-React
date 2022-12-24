import Book from './Book'
import {useSelector} from 'react-redux'
import {selectBooks} from '../redux/books/booksSlice'


const BookList = ()=>{
	const books = useSelector(selectBooks)
	// console.log(books);
	return(
		<>
			{
				books.map(book=>{
					// console.log("book",book);
					return <Book key={book.id} {...book}/>
				})
			}
		</>

	)
}

export default BookList