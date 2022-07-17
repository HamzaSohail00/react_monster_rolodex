import { useEffect, useState } from 'react';
import Cards from './components/card-list/CardList';
import Input from './components/search-Box/Search-Box';
import './App.css';

function App() {
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((monsters) => setMonsters(monsters));
	}, []);

	const handleSearchFieldChange = (e) => {
		const searchField = e.target.value;
		setSearchField(searchField);
	};

	return (
		<>
			<h1 className="app-title">Monsters Rolodex</h1>
			<Input handleSearchFieldChange={handleSearchFieldChange} />
			<Cards monsters={monsters} searchField={searchField} />
		</>
	);
}

export default App;
