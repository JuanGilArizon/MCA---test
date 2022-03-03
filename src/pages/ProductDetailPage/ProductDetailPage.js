import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/product-api';
import addToCart from '../../services/cart-api';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import ProductActions from '../../components/ProductActions/ProductActions';
import './productsDetailsPage.scss';

function ProductDetailPage() {
  const params = useParams();
  const [itemDetails, setItemDetails] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProduct(params.productId).then((response) => {
      setItemDetails(response.data);
      setLoading(false);
    }).catch((error) => {
      console.log({ error });
      setLoading(false);
    });
  }, []);

  const handleAddToCart = (options) => {
    addToCart(itemDetails.id, options).then((response) => {
      // redux
      // dispatch(cartActions.setNumberOfItems(response.data))
      console.log({ addToCart: response.data });
    });
  };

  return (
    <div className="product-detail-container">
      {loading
        ? 'Loading...'
        : (
          <>
            <img alt={`product ${itemDetails.brand} ${itemDetails.model}`} src={itemDetails.imgUrl} />
            <div>

              <ProductDescription item={itemDetails} />
              <ProductActions
                className="actions"
                onAddToCart={handleAddToCart}
                availableOptions={itemDetails.options}
              />
            </div>
          </>
        )}
    </div>
  );
}
export default ProductDetailPage;
