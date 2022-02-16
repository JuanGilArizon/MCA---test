import axios from 'axios';

const productApi = `${process.env.REACT_APP_HEROAPP_API_HOST}/api/product`;

export const getProducts = () => axios.get(productApi);

export const getProduct = (id) => axios.get(`${productApi}/${id}`);
