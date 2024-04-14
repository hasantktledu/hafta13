
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import { RiArrowGoBackFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './redux/todoSlice';
import { deleteLastTodo } from './redux/undoSlice';

const App = () => {
	const vekilFonksiyon = useDispatch()
	const undosArray = useSelector(state => state.undos)

	function geriAl() {
		const sonSilinenIs = [...undosArray].pop()
		// const sonSilinenIs = undosArray.pop()

		vekilFonksiyon( addTodo( {title: sonSilinenIs.title, completed: sonSilinenIs.completed} ) )
		vekilFonksiyon( deleteLastTodo() )
	}

	return (
		<div className='container bg-white p-4 mt-5'>
			<h1 className='d-flex justify-content-between'>Yapılacak İşler 

			{
				undosArray.length > 0 && 
					<div> 
						<RiArrowGoBackFill className='fs-5' onClick={geriAl} style={{cursor: "pointer"}} /> 
						<span className='fs-6'>{ undosArray.length }</span>
					</div>  
			}
			
			</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
	);
};

export default App;