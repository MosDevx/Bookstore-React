import Book from './Book'
import {useSelector} from 'react-redux'
import {selectBooks} from '../redux/books/booksSlice'


const BookList = ()=>{
	const books = useSelector(selectBooks)
	console.log(books);
	return(
		<>
		<Book />
		<Book />
		<Book />
		<Book />
		</>

	)
}

export default BookList