import './search-box.styles.css';
export default function Input({ handleSearchFieldChange }) {
	return (
		<input
			className={`search-box`}
			type="search"
			placeholder="search monsters"
			onChange={handleSearchFieldChange}
		/>
	);
}
