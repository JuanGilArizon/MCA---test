import { useNavigate } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';

function ProductsListPage() {
  const navigate = useNavigate();
  const handleItemClick = (itemId) => {
    navigate(itemId);
  };
  return (
    <ItemList data={[{ id: '1', name: 'one' }]} onItemClick={handleItemClick} />);
}
export default ProductsListPage;
