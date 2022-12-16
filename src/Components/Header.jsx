import {Link} from "react-router-dom"


export default function Header(){
		return (
	
				<div className="flex justify-between w-full items-center h-16 border-2 p-2">
						<div className="w-1/2 flex justify-evenly text-2xl">
								<h2>Bookstore CMS</h2>
								<Link to={'/home'} >Books</Link>
								<Link to={'/categories'}>Categories</Link>
						</div>
						
						<div>
							<span>FaceIcon</span>
						</div>
	
	
				</div>
	

		)
}