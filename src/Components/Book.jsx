import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const Book = ({title,author})=>{

	return(
		<>
		{/* main-div */}
		<div className=" flex border-2 h-32 m-2 items-center">

				{/*First half - Details and complete Icon */}
			<div className='w-3/4 flex justify-between'>

					{/* Details */}
					<div className='flex flex-col pl-10 text-left'>
							<span>Action</span>
							<span>The Hunger Games</span>
							<span>Suzanne Collins</span>

							<div>
								<button>Comments</button>
								<button>Remove</button>
								<button>Edit</button>
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