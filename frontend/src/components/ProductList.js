import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  };

  const toggleAvailability = async (id, available) => {
    try {
      await axios.put(`http://localhost:3001/api/products/${id}`, { available: !available });
      setProducts(
        products.map((product) =>
          product.id === id ? { ...product, available: !available } : product
        )
      );
    } catch (error) {
      console.error('Erro ao alterar disponibilidade:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h2>Lista de Produtos</h2>
      {products.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        products.map((product) => (
          <div className="product-item" key={product.id}>
            <span>{product.name}</span>
            <span>R$ {product.price.toFixed(2)}</span>
            <button
              className={`availability ${product.available ? 'available' : 'unavailable'}`}
              onClick={() => toggleAvailability(product.id, product.available)}
            >
              {product.available ? 'Disponível' : 'Indisponível'}
            </button>
            <button onClick={() => setSelectedProduct(product)}>Ver Descrição</button>
            <button onClick={() => deleteProduct(product.id)}>Excluir</button>
          </div>
        ))
      )}

      {selectedProduct && (
        <div className="modal" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description || 'Sem descrição.'}</p>
            <button onClick={() => setSelectedProduct(null)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
