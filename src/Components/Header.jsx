import {Link} from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Header =()=>{
		return (
	
				<div className="flex justify-between container m-auto items-center h-16 border-2 p-2">
						<div className="w-1/2 flex justify-evenly text-2xl items-center">
								<h2 className="text-5xl font-bold text-blue-500">Bookstore CMS</h2>
								<Link className='text-slate-500 active:text-black' to={'/home'} >Books</Link>
								<Link className='text-slate-500 active:text-black' to={'/categories'}>Categories</Link>
						</div>
						
						<div>
							<AccountCircleIcon fontSize="large" color='primary'/>
						</div>
	
	
				</div>
	

		)
}

export default Header