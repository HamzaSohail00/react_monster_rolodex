import { Component } from 'react';
import Cards from './components/card-list/CardList';
import Input from './components/search-Box/Search-Box';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: '',
		};
		this.handleSearchFieldChange = this.handleSearchFieldChange.bind(this);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((monsters) => this.setState(() => ({ monsters })));
	}

	handleSearchFieldChange(e) {
		const searchField = e.target.value;
		this.setState({ searchField });
	}
	render() {
		return (
			<>
				<h1 className="app-title">Monsters Rolodex</h1>
				<Input handleSearchFieldChange={this.handleSearchFieldChange} />
				<Cards
					monsters={this.state.monsters}
					searchField={this.state.searchField}
				/>
			</>
		);
	}
}

export default App;
