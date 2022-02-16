import PropTypes from 'prop-types';

function Item({ id, name, onItemClick }) {
  return (
    <button className="item-button" type="button" onClick={() => onItemClick(id)}>{name}</button>
  );
}
Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onItemClick: PropTypes.func,
};
Item.defaultProps = {
  onItemClick: () => null,
};
export default Item;
