import PropTypes from 'prop-types';
import './item.scss';

function Item({
  className, id, name, onItemClick,
}) {
  return (
    <div className={className}>
      <button className="item-button" type="button" onClick={() => onItemClick(id)}>{name}</button>
    </div>
  );
}
Item.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onItemClick: PropTypes.func,
};
Item.defaultProps = {
  onItemClick: () => null,
  className: '',
};
export default Item;
