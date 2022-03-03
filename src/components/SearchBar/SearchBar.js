import PropTypes from 'prop-types';
import './searchBar.scss';

function SearchBar({ className, onTextChange }) {
  return (
    <div className={`${className} mr-2`}>
      <label className="search-label" htmlFor="searchBar">
        Search
        <input id="searchBar" type="text" className="search-bar" onChange={(e) => onTextChange(e.target.value)} />
      </label>

    </div>
  );
}
SearchBar.propTypes = {
  onTextChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};
SearchBar.defaultProps = {
  className: '',
};
export default SearchBar;
