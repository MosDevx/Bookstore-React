import { useDispatch } from "react-redux"
import { addBookApi } from "../redux/books/booksSlice"
import { useState } from "react"

import Snackbar  from "@mui/material/Snackbar"

const AddNewBook = ()=>{

	//Show A Toast on message Add New Book
	const [open, setOpen] = useState(false)
	const handleClick = () =>{
		setOpen(true)
	}
	const handleClose = (event,reason) =>{
		if(reason === 'clickaway'){
			return
		}
		setOpen(false)
	}

	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const dispatch = useDispatch()


	const onTitleChanged = e => setTitle(e.target.value)
	const onAuthorChanged = e => setAuthor(e.target.value)

	const onAddBookClicked = (event) =>{
		event.preventDefault()
		if(title && author){
			
			dispatch(addBookApi({title,author}))
			setOpen(true)
			setTitle('')
			setAuthor('')
		}
	}



		return(
			<div className="flex w-full h-28 justify-between flex-col border-t-2 border-black p-2 mt-2">
				<h2 className="text-left  uppercase text-slate-500 font-extrabold text-3xl">ADD NEW BOOK</h2>
				<Snackbar 
					anchorOrigin={{vertical:"bottom",horizontal:"center"}}
					open={open}
					autoHideDuration={1800}
					onClose={handleClose}
					message="Book Added !!"
/>
				 <form className="flex w-8/12 justify-between" action="">
					<input type="text" placeholder="Book Title"  value={title} onChange={onTitleChanged}/>
					<input type="text" placeholder="Author" value={author} onChange={onAuthorChanged}/>

					<button className="border w-32 bg-blue-400 text-white text-lg font-bold" onClick={onAddBookClicked}>ADD BOOK</button>
				 </form>
			</div>
		)
}

export default AddNewBook