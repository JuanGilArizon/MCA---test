import PropTypes from 'prop-types';
import { useState } from 'react';
import './ProductActions.scss';

function ProductActions({
  className, onAddToCart, availableOptions,
}) {
  const { colors, storages } = availableOptions;

  const [colorCode, setColorCode] = useState(colors.length > 0 && colors[0].code);
  const [storageCode, setStorageCode] = useState(storages.length > 0 && storages[0].code);

  return (
    <div className={className}>
      <label htmlFor="color">
        Select color:
        <select id="color" onChange={setColorCode} value={colorCode}>
          {colors.map((color) => <option value={color.code}>{color.name}</option>)}
        </select>
      </label>
      <label htmlFor="storage">
        Select the storage:
        <select id="storage" onChange={setStorageCode} value={storageCode}>
          {storages.map((storage) => <option value={storage.code}>{storage.name}</option>)}
        </select>
      </label>
      <button type="button" onClick={() => onAddToCart({ colorCode, storageCode })}>
        Add to cart
      </button>
    </div>
  );
}
ProductActions.propTypes = {
  className: PropTypes.string,
  availableOptions: PropTypes.shape({
    colors: PropTypes.arrayOf({
      code: PropTypes.number,
      name: PropTypes.string,
    }),
    storages: PropTypes.arrayOf({
      code: PropTypes.number,
      name: PropTypes.string,
    }),
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
ProductActions.defaultProps = {
  className: '',
};
export default ProductActions;
