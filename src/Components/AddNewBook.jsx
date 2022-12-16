

export default function AddNewBook(){
		return(
			<div className="flex w-full h-28 justify-between flex-col border-t-2 p-2">
				<h2 className="text-left ">ADD NEW BOOK</h2>
				 <form className="flex w-8/12 justify-between" action="">
					<input type="text" placeholder="Book Title" />
					<input type="text" placeholder="Author" />

					<button className="border w-32">ADD BOOK</button>
				 </form>
			</div>
		)
}