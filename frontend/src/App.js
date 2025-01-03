import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <h1>Gerenciador de Produtos</h1>
      <ProductForm onProductAdded={() => window.location.reload()} />
      <ProductList />
    </div>
  );
};

export default App;
