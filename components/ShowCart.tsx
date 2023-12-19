"use client";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ExclamationIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CartProduct from './CartProduct';
import { useRouter } from 'next/navigation'

const ShowCart = () => {
  const cartItems = useAppSelector((state) => state.cart.products);
  const cartTotal = useAppSelector((state) => state.cart.total);
  const dispatch = useAppDispatch();
  const [deleteQuantity, setDeleteQuantity] = useState<number>(0);
  
  const [total, setTotal] = useState(cartTotal);
  const router = useRouter()

  const handleCheckout = async () => {
    router.push('/cart/checkout')
  };

  useEffect(() => {
    setTotal(cartTotal);
  }, [cartTotal]);
  
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
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{background: "#353734"}}>
                          Producto
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{background: "#353734"}}>
                          Precio
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{background: "#353734"}}>
                          Cantidad
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{background: "#353734"}}>
                          Total
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{background: "#353734"}}>
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {cartItems.map(( productProp, index ) => (
                        <CartProduct key={index} product={productProp.product} quantity={productProp.quantity} />
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
                        onClick={handleCheckout}
                        className={`${
                          cartItems.length === 0
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300'
                        } text-white font-medium text-sm px-5 py-3 text-center border-2 border-primary-600`}
                        >
                        Siguiente
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