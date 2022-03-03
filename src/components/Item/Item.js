import PropTypes from 'prop-types';
import './item.scss';

const DIVISA = '€';
function Item({
  className, id, brand, model, price, imgUrl, onItemClick,
}) {
  return (
    <div className={className}>
      <button className="item-button" type="button" onClick={() => onItemClick(id)}>
        <img alt={`product ${brand} ${model}`} src={imgUrl} />
        <div>{`marca: ${brand}`}</div>
        <div>{`modelo: ${model}`}</div>
        <div>{`precio: ${price}${DIVISA}`}</div>
      </button>
    </div>
  );
}
Item.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  onItemClick: PropTypes.func,
};
Item.defaultProps = {
  onItemClick: () => null,
  className: '',
};
export default Item;
