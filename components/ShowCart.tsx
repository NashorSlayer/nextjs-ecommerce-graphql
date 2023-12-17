"use client";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ExclamationIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React, { useState } from 'react';
import { SetTotal, DeleteFromCart} from '@/redux/cartSlice';

const ShowCart = () => {
  const cartItems = useAppSelector((state) => state.cart.products);
  const cartTotal = useAppSelector((state) => state.cart.total);
  const dispatch = useAppDispatch();
  
    const [total, setTotal] = useState(cartTotal);
  
    const removeFromCart = (id: number) => {
      const product = cartItems.find((item) => item.product.id === id);
      const newTotal = total - ((product?.product?.price || 0) * (product?.quantity || 0));
      setTotal(newTotal);
      dispatch(DeleteFromCart(id));
      dispatch(SetTotal());
    };
  
    return (
        <section>
          <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="grid grid-cols-[3fr,1fr] gap-8 w-full max-w-screen-xl">
              <div className="bg-white rounded-lg shadow"style={{background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 60}}>
                <div className="p-4 space-y-3">
                <h2 className="flex items-center justify-center text-lg font-bold text-gray-900 dark:text-white">
                Productos en el Carrito
                </h2>
                {cartItems.length === 0 ? (
                    <><p className="text-gray-400 flex items-center justify-center"><ExclamationIcon className="w-20 h-20 mt-6" /></p>
                    <p className="flex items-center justify-center text-sm font-light text-gray-500 dark:text-gray-400">
                    No tienes productos en el carrito. <Link href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Volver a la página de inicio</Link>
                    </p></>
                ) : (
                  <table className="min-w-full table-auto divide-y divide-gray-200">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Producto
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Precio
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Cantidad
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {cartItems.map(( productProp ) => (
                        <tr key={productProp.product.id}>
                          <td className="px-6 py-4 whitespace-nowrap">{productProp.product.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap">${productProp.product.price}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{productProp.quantity}</td>
                          <td className="px-6 py-4 whitespace-nowrap">${(productProp.product.price * productProp.quantity)}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button onClick={() => removeFromCart(productProp.product.id)}>Eliminar</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                </div>
              </div>
    
              <div className="bg-white rounded-lg shadow "style={{background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 60}}>
                <div className="p-10 space-y-10">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">Resumen de Compra</h2>
                  <table className="min-w-full table-auto">
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Total:</td>
                        <td className="px-4 py-2 text-right text-xs font-medium">${total}</td>
                      </tr>
                    </tbody>
                  </table>
                    <div className="flex items-center justify-center">
                    <button
                        disabled={cartItems.length === 0}
                        style={{width: "80%", backgroundColor: "#9acd1b", borderRadius: 20}}
                        className={`${
                          cartItems.length === 0
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300'
                        } text-white font-medium text-sm px-5 py-3 text-center border-2 border-primary-600`}
                        >
                        Realizar compra
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
  };
  
  export default ShowCart;