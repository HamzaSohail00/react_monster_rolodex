import { Component } from 'react';
import './search-box.styles.css';
export default class Input extends Component {
	render() {
		return (
			<input
				className={`search-box`}
				type="search"
				placeholder="search monsters"
				onChange={this.props.handleSearchFieldChange}
			/>
		);
	}
}
