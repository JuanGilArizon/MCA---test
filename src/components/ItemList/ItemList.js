import PropTypes from 'prop-types';
import Item from '../Item/Item';

function ItemList({ data, onItemClick }) {
  return (
    <div>
      {
      data.length !== 0
        ? data
          .map(
            (item) => (
              <Item
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
};

export default ItemList;
