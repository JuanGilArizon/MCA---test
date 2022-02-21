import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../services/product-api';
import ItemList from '../../components/ItemList/ItemList';
import SearchBar from '../../components/SearchBar/SearchBar';
import './productList.scss';

function ProductsListPage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    getProducts().then((response) => {
      const productsResponse = response.data;
      setProducts(productsResponse);
      setFilteredProducts(productsResponse);
    });
  }, []);

  const handleItemClick = (itemId) => {
    navigate(itemId);
  };
  const filterData = (textCriteria) => {
    // TODO: comparar con marca y modelo
    const filtered = products.filter((product) => product.model.toUpperCase()
      .includes(textCriteria.toUpperCase())
    || product.brand.includes(textCriteria));
    setFilteredProducts(filtered);
  };
  return (
    <div className="product-list-container p-2">
      <SearchBar className="search-input mb-3" onTextChange={filterData} />
      <ItemList className="item-list" data={filteredProducts} onItemClick={handleItemClick} />
    </div>
  );
}
export default ProductsListPage;
