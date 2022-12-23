import { useDispatch } from "react-redux"
import { addBook } from "../redux/books/booksSlice"
import { useState } from "react"

const AddNewBook = ()=>{

	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const dispatch = useDispatch()


	const onTitleChanged = e => setTitle(e.target.value)
	const onAuthorChanged = e => setTitle(e.target.author)

	const onAddBookClicked = (event) =>{
		event.preventDefault()
		if(title && author){
			
			dispatch(addBook(title,author))
			setTitle('')
			setAuthor('')
		}
	}



		return(
			<div className="flex w-full h-28 justify-between flex-col border-t-2 p-2">
				<h2 className="text-left ">ADD NEW BOOK</h2>
				 <form className="flex w-8/12 justify-between" action="">
					<input type="text" placeholder="Book Title"  value={title} onChange={onTitleChanged}/>
					<input type="text" placeholder="Author" value={author} onChange={onAuthorChanged}/>

					<button className="border w-32" onClick={onAddBookClicked}>ADD BOOK</button>
				 </form>
			</div>
		)
}

export default AddNewBook