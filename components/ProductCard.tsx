import React, { useEffect, useState } from 'react';
import ShoppingCartIcon from '@heroicons/react/outline/ShoppingCartIcon';
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { AddToCart, SetTotal } from "../redux/cartSlice";
import ProductDetailsPopup from './ProductDetailsPopup';
import { ProductState } from '../redux/productSlice';
import { ProductCardProps } from '../redux/cartSlice';

const ProductCard: React.FC<{product: ProductState}> = ({ product }) => {
  const cartItems = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(0);
  const [showDetailsPopup, setShowDetailsPopup] = useState<boolean>(false);

  const handleAddToCart = (productProp: ProductCardProps) => {
    if (productProp.quantity === 0) {
      alert("Debes seleccionar una cantidad mayor a 0");
      return;
    } else if (cartItems.find((item) => item.product.id === productProp.product.id)) {
      alert("Este producto ya está en el carrito");
      return;
    } else if (productProp.quantity > productProp.product.stock){
      alert("No hay suficiente stock de este producto");
      return;
    }else {
      alert("Producto agregado al carrito");
      dispatch(AddToCart(productProp));
      dispatch(SetTotal());
      setQuantity(0);
    }
  };
  
  useEffect(() => {
    setQuantity(0);
  }, [product]);

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
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={() => handleAddToCart({product: product, quantity: quantity})} className="bg-primary-500 text-white px-2 py-1 rounded">
          <ShoppingCartIcon className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center">
          <button onClick={() => setShowDetailsPopup(true)} className="text-blue-500">Detalles</button>
        </div>
        {showDetailsPopup && (
          <ProductDetailsPopup product={product} onClose={() => setShowDetailsPopup(false)} />
        )}
      </div>
    </div>
  );
};

export default ProductCard;