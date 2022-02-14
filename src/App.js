import { Routes, Route, Navigate } from 'react-router-dom';
import routes from './config/routes';
import './App.css';
import ProductsListPage from './pages/ProductsListPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <Routes>
      <Route
        path={routes.PRODUCT}
      >
        <Route index element={<ProductsListPage />} />
        <Route path=":productId" element={<ProductDetailPage />} />
      </Route>
      <Route path="*" element={<Navigate to={routes.PRODUCT} />} />
    </Routes>
  );
}

export default App;
