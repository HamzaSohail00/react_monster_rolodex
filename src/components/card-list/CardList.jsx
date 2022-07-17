import { Component } from 'react';
import Cards from '../card/Card';
import './card-list.styles.css';
export default class CardList extends Component {
	render() {
		const { monsters, searchField } = this.props;
		const filteredArray = monsters.filter((item) =>
			item.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
		);
		return (
			<div className="card-list">
				<Cards monsters={filteredArray} />
			</div>
		);
	}
}
