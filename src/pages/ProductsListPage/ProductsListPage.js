import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import SearchBar from '../../components/SearchBar/SearchBar';

function ProductsListPage() {
  const navigate = useNavigate();
  const [data] = useState([{ id: '1', name: 'one' }, { id: '2', name: 'two' }]);
  const [filteredData, setFilteredData] = useState(data);
  const handleItemClick = (itemId) => {
    navigate(itemId);
  };
  const filterData = (textCriteria) => {
    // TODO: comparar con marca y modelo
    const filtered = data.filter((product) => product.name.includes(textCriteria));
    setFilteredData(filtered);
  };
  return (
    <>
      <SearchBar onTextChange={filterData} />
      <ItemList data={filteredData} onItemClick={handleItemClick} />
    </>
  );
}
export default ProductsListPage;
