import axios from 'axios';

const cartApi = `${process.env.REACT_APP_HEROAPP_API_HOST}/api/cart`;

const addToCart = (productId, options) => {
  const { colorCode, storageCode } = options;
  axios.post(
    cartApi,
    {
      id: productId,
      colorCode,
      storageCode,
    },
  );
};

export default addToCart;
