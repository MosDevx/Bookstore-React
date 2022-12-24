import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux';
import { deleteBookApi } from '../redux/books/booksSlice';

const completionPercent = ()=>{
	return (Math.floor(Math.random()* 100))
}



const Book = ({title,author,item_id,category})=>{
	const dispatch = useDispatch()

	const onRemoveButtonClicked = (id)=>{
		dispatch(deleteBookApi(id))
	}
	
	let completed = completionPercent()
	let chapter = Math.floor(completed/3) + 17
	return(
		<>
		{/* main-div */}
		<div className=" w-11/12  flex border-2 h-36 m-2 items-center bg-white hover:drop-shadow-md hover:border-blue-200">

				{/*First half - Details and complete Icon */}
			<div className='w-3/4 flex justify-between'>

					{/* Details */}
					<div className='flex flex-col pl-10 text-left'>
							<span className="font-bold  text-slate-600">{category}</span>
							<span className='capitalize font-bold text-2xl'>{title}</span>
							<span className='capitalize text-blue-500 text-lg'>{author}</span>

							<div className='space-x-4 mt-4 text-blue-500'>
								<button className='border-r-2 p-1 pr-2 font-bold'>Comments</button>
								<button className='border-r-2 p-1 pr-2 font-bold hover:text-red-400 ' onClick={()=>onRemoveButtonClicked(item_id)}>Remove</button>
								<button className=' p-1 font-bold' >Edit</button>
							</div>
					</div>

						{/*Complete Icon  */}
					<div className='flex justify-between  items-center border-r-4 pr-16 border-slate-400'>
						<CircularProgress variant="determinate" size={80} thickness={4} value={completed} />
						<span className='pl-8 text-slate-400'> <span className='text-4xl text-black'>{completed}%</span>  <br />Completed</span>
					</div>
			</div>

				{/*Second half- Current Chapter  */}
			<div className='w-1/4 flex flex-col h-28  pl-16 justify-evenly'>
				<span className='text-slate-400 uppercase'>Current Chapter</span>
				<span className='capitalize mb-4'>Chapter {chapter}</span>
				<button className='w-fit border-2 p-2 uppercase bg-blue-500 text-white hover:bg-blue-600'>Update Progress</button>
			</div>
		</div>
		</>
	)
}

export default Book