import Book from './Book'
import {useSelector} from 'react-redux'
import {selectBooks} from '../redux/books/booksSlice'



const BookList = ()=>{
	const books = useSelector(selectBooks)
	// console.log(books);
	return(
		<div className='overflow-auto h-[550px]  '>

		<div className='flex flex-col-reverse '>
			{
				books.map(book=>{
					// console.log("book",book);
					return <Book key={book.item_id} {...book}/>
				})
			}
		</div>
			</div>

	)
}

export default BookList