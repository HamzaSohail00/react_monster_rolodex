import { useEffect, useState } from 'react';
import Cards from '../card/Card';
import './card-list.styles.css';
export default function CardList({ monsters, searchField }) {
	const [filteredArray, setFilteredArray] = useState(monsters);
	console.log('render', { monsters, searchField });
	useEffect(() => {
		const newFilteredArray = monsters.filter((item) =>
			item.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
		);
		setFilteredArray(newFilteredArray);
	}, [monsters, searchField]);

	return (
		<div className="card-list">
			<Cards monsters={filteredArray} />
		</div>
	);
}
