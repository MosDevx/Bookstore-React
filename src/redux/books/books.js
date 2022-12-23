//ACTIONS
const ADD_BOOK = "bookstore/books/ADD_BOOK"
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK'

//REDUCERS

export default function booksReducer(state=[],action){
	switch(action.type ){
		case ADD_BOOK:
		return [
			...state,
			{
				id:action.payload.id,
				title: action.payload.title,
				author: action.payload.author
			}
		]

		case DELETE_BOOK:
			return state.filter((book)=> book.id !== action.payload.id)

		default: 
		 return state
	}
}

// ACTION CREATORS

export function addBook(payload={}){
	return {type:ADD_BOOK, payload}
}

export function deleteBook(payload={}){
	return {type:DELETE_BOOK, payload}
}