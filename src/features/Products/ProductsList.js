
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchProducts, 
  selectAllProducts, 
  getProductsStatus, 
  getProductsError 
} from './productsSlice';
import ProductCard from '../../components/ProductCard'
import Loader from '../../components/Loader';
import './ProductsList.css';

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(getProductsStatus);
  const error = useSelector(getProductsError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <Loader />;
  } else if (status === 'succeeded') {
    content = (
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } else if (status === 'failed') {
    content = <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="products-container">
      <h2 className="section-title">Nykaa Best Sellers</h2>
      {content}
    </div>
  );
};

export default ProductsList;
