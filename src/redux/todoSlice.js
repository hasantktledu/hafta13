import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'

export const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		kapat: false,
		sirala: "",
		veri: [
			{ id: 1, title: 'Elma al', completed: false },
			{ id: 2, title: 'Muz al', completed: false },
			{ id: 3, title: 'Süt al', completed: true },
			{ id: 4, title: 'Yumurta al', completed: false },
			{ id: 5, title: 'Ekmek al', completed: false },
		]
	},
    
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: uuidv4(),
				title: action.payload.title,
				completed: action.payload.completed ? action.payload.completed: false,
			};
			state.veri.push(todo);
		},

		tamamlandiAcKapa: (state, action) => {
			const index = state.veri.findIndex((todo) => todo.id === action.payload.id);
			state.veri[index].completed = action.payload.completed;
		},

		isSil: ( state, action ) => {
			const yeniStateVeri = state.veri.filter( eleman => eleman.id !== action.payload.id )
			return {...state, veri: yeniStateVeri}
		},

		azSirala: ( state, action ) => {
			if( state.sirala === "az" ) {
				state.veri.sort( (onceki, sonraki) => sonraki.title.localeCompare(onceki.title, "tr-TR") )
				state.sirala = "za"
			} else if (state.sirala === "za" ) {
				state.veri.sort( (onceki, sonraki) => onceki.title.localeCompare(sonraki.title, "tr-TR") )
				state.sirala = "az"
			}else {
				state.veri.sort( (onceki, sonraki) => onceki.title.localeCompare(sonraki.title, "tr-TR") )
				state.sirala = "az"
			}
			
		}
	},
});


export const { addTodo, tamamlandiAcKapa, isSil, azSirala } = todoSlice.actions;
export default todoSlice.reducer;