import { useDispatch,useSelector } from "react-redux"

import { checkStatus ,selectStatus} from "../redux/categories/categoriesSlice"


const  Categories = () =>{
	const dispatch = useDispatch()
	const status = useSelector(selectStatus)

	const onCheckStatusButtonClick = (e)=>{
		console.log("handler called")
		dispatch(checkStatus())
	}
	return(

	<div className="text-2xl p-10">
		<div>{status}</div>
		<button className="border p-2 bg-green-300" onClick={onCheckStatusButtonClick}>Check Status</button>
	</div>
	)
}

export default Categories