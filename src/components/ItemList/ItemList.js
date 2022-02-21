import PropTypes from 'prop-types';
import Item from '../Item/Item';
import './itemList.scss';

function ItemList({ className, data, onItemClick }) {
  return (
    <div className={`item-list-container ${className}`}>
      {
      data.length !== 0
        ? data
          .map(
            (item) => (
              <Item
                className="item"
                key={item.id}
                id={item.id}
                name={item.model}
                onItemClick={(itemId) => onItemClick(itemId)}
              />
            ),
          )
        : 'No Items'
      }
    </div>
  );
}
ItemList.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string,
      brand: PropTypes.string,
      model: PropTypes.string,
      price: PropTypes.string,
      imgUrl: PropTypes.string,
    },
  )).isRequired,
  onItemClick: PropTypes.func,
};
ItemList.defaultProps = {
  onItemClick: () => null,
  className: '',
};

export default ItemList;
