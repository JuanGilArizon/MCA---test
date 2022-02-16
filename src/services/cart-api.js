import axios from 'axios';

const cartApi = `${process.env.REACT_APP_HEROAPP_API_HOST}/api/cart`;

const addToCart = (product) => axios.post(cartApi, product);

export default addToCart;
