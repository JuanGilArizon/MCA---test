import PropTypes from 'prop-types';

function SearchBar({ onTextChange }) {
  return (
    <label htmlFor="searchBar">
      Search
      <input id="searchBar" type="text" className="search-bar" onChange={(e) => onTextChange(e.target.value)} />
    </label>
  );
}
SearchBar.propTypes = {
  onTextChange: PropTypes.func.isRequired,
};
export default SearchBar;
