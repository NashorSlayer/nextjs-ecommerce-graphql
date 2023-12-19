import { DeleteFromCart, SetQuantity, SetTotal } from "@/redux/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TrashIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { ProductState } from "@/redux/productSlice";
import { ProductCardProps } from "@/redux/cartSlice";
import React from "react";

const CartProduct: React.FC<ProductCardProps> = ({ product, quantity }) => {
    const [deleteQuantity, setDeleteQuantity] = useState<number>(0);
    const dispatch = useAppDispatch();
    
    const removeFromCart = (product: ProductState) => {
        console.log(deleteQuantity)
        if (deleteQuantity === 0) {
        alert("Debes seleccionar una cantidad mayor a 0");
        return;
        } else if (deleteQuantity > quantity) {
        alert("No puedes eliminar más productos de los que hay en el carrito");
        return;
        } else if (deleteQuantity === quantity){
            alert("Producto eliminado del carrito");
            dispatch(DeleteFromCart(product.id));
            dispatch(SetTotal());
            setDeleteQuantity(0);
            return;
        } else {
            alert("Cantidad eliminada del carrito");
            dispatch(SetQuantity({id: product.id, quantity: deleteQuantity}));
            dispatch(SetTotal());
            setDeleteQuantity(0);
            return;
        }
    };
    
    useEffect(() => {
        setDeleteQuantity(0);
    }, [product]);
    
    return (
        <tr key={product.id}>
            <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">${product.price}</td>
            <td className="px-6 py-4 whitespace-nowrap">{quantity}</td>
            <td className="px-6 py-4 whitespace-nowrap">${(product.price * quantity)}</td>
            <td className="px-6 py-4 whitespace-nowrap">
                <input
                type="number"
                id={`quantity-${product.id}`}
                className="p-1 border border-gray-300 rounded dark:text-black text-center"
                style={{borderRadius: 20}}
                placeholder='1'
                min="1"
                max={quantity}
                value={deleteQuantity}
                onChange={(e) => setDeleteQuantity(Number(e.target.value))}
                />  
                <button onClick={() => removeFromCart(product)}>    
                    <TrashIcon className="w-6 h-6 text-gray-300"/>
                </button>
            </td>
        </tr>
    );
    }

export default CartProduct;