import {
  Routes, Route, Navigate, Outlet,
} from 'react-router-dom';
import routes from './config/routes';
import './App.css';
import Header from './components/Header/Header';
import ProductsListPage from './pages/ProductsListPage/ProductsListPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

function App() {
  return (
    <Routes>
      <Route
        path={routes.PRODUCT}
        element={(
          <>
            <Header title={process.env.REACT_APP_TITLE} />
            <Outlet />
          </>
)}
      >
        <Route index element={<ProductsListPage />} />
        <Route path=":productId" element={<ProductDetailPage />} />
      </Route>
      <Route path="*" element={<Navigate to={routes.PRODUCT} />} />
    </Routes>
  );
}

export default App;
