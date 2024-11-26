import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/Pages/MainPage';
import CategoryPage from './components/Pages/CategoryPage';
import CategoryProductsPage from './components/Pages/CategoryProductsPage';
import Products from './components/Pages/Products';
import ProductDetailsPage from './components/Pages/ProductDetailsPage';
import CartPage from './components/Pages/CartPage';

const App = () => {
  return (
    <Routes>
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/category/:categoryId" element={<CategoryProductsPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:productId" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default App;
