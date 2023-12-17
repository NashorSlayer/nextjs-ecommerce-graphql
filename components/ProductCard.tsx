import React from 'react';
import ShoppingCartIcon from '@heroicons/react/outline/ShoppingCartIcon';

interface Product {
    id: number;
    name: string;
    category: string;
    stock: number;
    price: number;
    image: string;
    description: string;
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-gray-600 flex items-center justify-between mb-2 border p-4" style={{borderColor: "#9acd1b", borderWidth: 1, borderRadius: 20}}>
      <div className="flex flex-col items-center">
        <img src={product.image} alt={product.name} className="w-16 h-16 mb-2" />
        <span className="font-semibold">{product.name}</span>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-gray-400">Categoría</p>
        <p>{product.category}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-gray-400">Precio</p>
        <p>${product.price}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-gray-400">Stock</p>
        <p>{product.stock}</p>
      </div>
      <div className="flex flex-col items-center font-bold text-gray-400">
        <label htmlFor={`quantity-${product.id}`}>Cantidad</label>
        <input
          type="number"
          id={`quantity-${product.id}`}
          className="w-13 p-1 border border-gray-300 rounded dark:text-black text-center"
          style={{borderRadius: 20}}
          placeholder='0'
          min="0"
          max={product.stock}
        />
        <button className="bg-primary-500 text-white px-2 py-1 rounded">
          <ShoppingCartIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;