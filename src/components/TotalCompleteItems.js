import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
	const isler = useSelector(state => state.todos.veri)
	const tamamlananSayisi = isler.filter( eleman => eleman.completed === true ).length

	return <h4 className='mt-3'>Total Complete Items: {tamamlananSayisi}</h4>;
};

export default TotalCompleteItems;
