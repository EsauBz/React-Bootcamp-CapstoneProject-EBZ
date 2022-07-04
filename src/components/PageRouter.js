import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
import Products from '../pages/Products';
import NoPage from '../pages/NoPage';
import ProductDetails from '../pages/ProductDetails';
import SearchProducts from '../pages/SearchProducts';

function PageRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      <Route path="/search" element={<SearchProducts />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default PageRouter;
