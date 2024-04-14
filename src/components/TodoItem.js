import React from 'react';
import { useDispatch } from 'react-redux';
import { tamamlandiAcKapa, isSil } from '../redux/todoSlice';
import { saveTodo } from '../redux/undoSlice';

const TodoItem = ({ id, title, completed }) => {
	const vekilFonksiyon = useDispatch()

	function tamamlandiIslem() {
		vekilFonksiyon( tamamlandiAcKapa({id:id, completed: !completed}) )
	}

	function silmeIslemi() {
		vekilFonksiyon( saveTodo( {title, completed} ) )
		vekilFonksiyon( isSil( {id:id} ) )
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>

					<label>
						<input onChange={tamamlandiIslem} type='checkbox' className='form-check-input me-3' checked={completed} />
						{title}
					</label>
				</span>
				<button onClick={silmeIslemi} className='btn btn-danger'>Sil</button>
			</div>
		</li>
	);
};

export default TodoItem;
