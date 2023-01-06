import './styles.css';

export function TextInput({ searchValue, handleChange }) {
	return (
		<input type="search" onChange={handleChange} value={searchValue} />
	);
}