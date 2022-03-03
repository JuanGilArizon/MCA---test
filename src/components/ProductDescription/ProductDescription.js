import PropTypes from 'prop-types';
import './ProductDescription.scss';

function ProductDescription({
  className, item,
}) {
  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displaySize,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight,
  } = item;
  return (
    <div className={className}>
      <ul>
        <li>{`brand : ${brand}`}</li>
        <li>{`model : ${model}`}</li>
        <li>{`price : ${price}`}</li>
        <li>{`cpu : ${cpu}`}</li>
        <li>{`ram : ${ram}`}</li>
        <li>{`os : ${os}`}</li>
        <li>{`displaySize : ${displaySize}`}</li>
        <li>{`battery : ${battery}`}</li>
        <li>{`primaryCamera : ${primaryCamera}`}</li>
        <li>{`secondaryCmera : ${secondaryCmera}`}</li>
        <li>{`dimentions : ${dimentions}`}</li>
        <li>{`weight : ${weight}`}</li>
      </ul>
    </div>
  );
}
ProductDescription.propTypes = {
  className: PropTypes.string,
  item: PropTypes.shape({
    brand: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.string,
    cpu: PropTypes.string,
    ram: PropTypes.string,
    os: PropTypes.string,
    displaySize: PropTypes.string,
    battery: PropTypes.string,
    primaryCamera: PropTypes.string,
    secondaryCmera: PropTypes.string,
    dimentions: PropTypes.string,
    weight: PropTypes.string,
  }).isRequired,
};
ProductDescription.defaultProps = {
  className: '',
};
export default ProductDescription;
