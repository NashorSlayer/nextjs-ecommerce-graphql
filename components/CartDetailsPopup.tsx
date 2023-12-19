import React from 'react';
import { useAppSelector } from '@/redux/hooks';
import { selectCart } from '@/redux/cartSlice';
import Link from 'next/link';
import { ExclamationIcon } from '@heroicons/react/solid';

interface CartDetailsPopupProps {
    onClose: () => void;
}

const CartDetailsPopup: React.FC<CartDetailsPopupProps> = ({ onClose }) => {
    const cartProducts = useAppSelector(selectCart);

    const totalAmount = cartProducts.reduce(
        (total, productProp) => total + productProp.product.price * productProp.quantity,
        0
    );

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md" style={{background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 20}}>
                <h2 className="text-xl font-bold mb-1 flex items-center justify-center">DETALLES DEL CARRITO</h2>
                {cartProducts.length === 0 ? (
                    <>
                        <p className="flex items-center justify-center text-sm">No hay productos en el carrito</p>
                        <p className="flex items-center justify-center">
                            <ExclamationIcon className="w-20 h-20 mt-2 text-gray-400"/>
                        </p>
                    </>
                ) : (
                    cartProducts.map((productProp) => (
                        <div className="flex items-center justify-center" key={productProp.product.id}>
                            <p>
                                {productProp.product.name} x {productProp.quantity}
                            </p>
                        </div>
                    ))
                )}
                <p className="font-bold mt-2 flex items-center justify-center">TOTAL: ${totalAmount}</p>
                <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none" style={{backgroundColor: "#9acd1b", borderRadius: 20}}>
                    Cerrar detalles
                </button>
                <Link href="/cart">
                    <button className="mt-4 ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none" style={{backgroundColor: "#9acd1b", borderRadius: 20}}>
                        Ir al carrito
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CartDetailsPopup;