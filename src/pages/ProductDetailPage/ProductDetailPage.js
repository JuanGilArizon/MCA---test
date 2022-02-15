import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const params = useParams();
  return (
    <div>
      ProductDetailPage for product
      {' '}
      {params.productId}
    </div>
  );
}
export default ProductDetailPage;
