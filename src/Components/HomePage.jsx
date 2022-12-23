import BookList from "./BookList";
import AddNewBook from "./AddNewBook";


const HomePage =()=>{
	return(
		<div className="container m-auto">

		<BookList />
		<AddNewBook />
		
		</div>

	)
}

export default HomePage