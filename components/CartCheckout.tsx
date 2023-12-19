import { DeleteFromCart, SetQuantity, SetTotal } from "@/redux/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useState, useEffect } from "react";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
};

interface ProductCardProps {
  product: Product;
  quantity: number;
}

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