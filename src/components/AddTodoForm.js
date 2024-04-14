import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, azSirala } from '../redux/todoSlice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const vekilFonksiyon = useDispatch()


	const onSubmit = (event) => {
		event.preventDefault(); // form gönderimi tarayıcıyı yeniden başlatmasın

		if( value ) {
			vekilFonksiyon( addTodo({title: value}) )
		}
	};

	const todoSirala = () => {
		vekilFonksiyon( azSirala() )
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>

			<button type='submit' className='btn btn-primary mb-2 me-2'>
				Ekle
			</button>

			<button type='button' onClick={todoSirala} className='btn btn-secondary mb-2'>
				Sırala({})
			</button>
		</form>
	);
};

export default AddTodoForm;
