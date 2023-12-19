import React from 'react';
import { ProductCardProps } from "@/redux/cartSlice";

const CartCheckout: React.FC<ProductCardProps> = ({ product, quantity }) => {
  return (
    <tr key={product.id}>
      <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{quantity}</td>
      <td className="px-6 py-4 whitespace-nowrap">${(product.price * quantity)}</td>
    </tr>
  );

}

export default CartCheckout;