import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.css';

const ProductForm = ({ onProductAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/products', formData);
      onProductAdded(response.data);
      setFormData({ name: '', description: '', price: '', available: true });
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nome do produto"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Descrição do produto"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Preço"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <label>
        Disponível:
        <input
          type="checkbox"
          name="available"
          checked={formData.available}
          onChange={handleChange}
        />
      </label>
      <button className="submit-button" type="submit">Adicionar Produto</button>
    </form>
  );
};

export default ProductForm;
