import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux';
import { deleteBookApi } from '../redux/books/booksSlice';

const Book = ({title,author,id,category})=>{
	const dispatch = useDispatch()

	const onRemoveButtonClicked = (id)=>{
		// console.log('RemoveButtonCalled',id)
		dispatch(deleteBookApi(id))
	}

	// const onEditButtonClicked = ()=>{
	// 	dispatch(fetchBooks())
	// }
	return(
		<>
		{/* main-div */}
		<div className=" flex border-2 h-32 m-2 items-center">

				{/*First half - Details and complete Icon */}
			<div className='w-3/4 flex justify-between'>

					{/* Details */}
					<div className='flex flex-col pl-10 text-left'>
							<span>{category}</span>
							<span>{title}</span>
							<span>{author}</span>

							<div className='space-x-4'>
								<button className='border p-1 font-bold'>Comments</button>
								<button className='border p-1 font-bold' onClick={()=>onRemoveButtonClicked(id)}>Remove</button>
								<button className='border p-1 font-bold' >Edit</button>
							</div>
					</div>

						{/*Complete Icon  */}
					<div className='flex justify-between  items-center border-r-4 pr-16 border-slate-400'>
						<CircularProgress variant="determinate" size={80} thickness={4} value={70} />
						<span className='pl-8'>70% <br />Completed</span>
					</div>
			</div>

				{/*Second half- Current Chapter  */}
			<div className='w-1/4 flex flex-col h-28   pl-16 justify-evenly'>
				<span>Current Chapter</span>
				<span>Chapter 17</span>
				<button className='w-fit border-2 p-2 '>Update Progress</button>
			</div>
		</div>
		</>
	)
}

export default Book