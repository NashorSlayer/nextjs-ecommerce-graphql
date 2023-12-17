"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const ShowCart = () => {
    const [cart, setCart] = useState([
        { id: "1", name: 'Producto 1', price: 20.00, quantity: 2 },
        { id: "2", name: 'Producto 2', price: 15.00, quantity: 1 },
        { id: "3", name: 'Producto 3', price: 35.00, quantity: 3 },
        { id: "4", name: 'Producto 4', price: 45.00, quantity: 2 },
        { id: "5", name: 'Producto 5', price: 25.00, quantity: 1 },
      ]);
  
    const [total, setTotal] = useState(
      cart.reduce((acc, product) => acc + product.price*product.quantity, 0)
    );
  
    const removeFromCart = (id: string) => {
        const updatedCart = cart.filter((product) => product.id !== id);
        setCart(updatedCart);

        const newTotal = updatedCart.reduce((acc, product) => acc + product.price * product.quantity, 0);
        setTotal(newTotal);
    };
  
    return (
        <section>
          <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="grid grid-cols-[3fr,1fr] gap-8 w-full max-w-screen-xl">
              <div className="bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
                <div className="p-4 space-y-3">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Productos en el Carrito
                </h2>
                {cart.length === 0 ? (
                    <p className="flex items-center justify-center text-sm font-light text-gray-500 dark:text-gray-400">
                    No tienes productos en el carrito. <Link href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Volver a la página de inicio</Link>
                    </p>
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
                      {cart.map((product) => (
                        <tr key={product.id}>
                          <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap">${product.price.toFixed(2)}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{product.quantity}</td>
                          <td className="px-6 py-4 whitespace-nowrap">${(product.price * product.quantity).toFixed(2)}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                </div>
              </div>
    
              <div className="bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
                <div className="p-10 space-y-10">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">Resumen de Compra</h2>
                  <table className="min-w-full table-auto">
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Total:</td>
                        <td className="px-4 py-2 text-right text-xs font-medium">${total.toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                    <div className="flex items-center justify-center">
                    <button
                        disabled={cart.length === 0} // Deshabilitar el botón si no hay productos en el carrito
                        className={`${
                            cart.length === 0
                            ? 'bg-gray-300 cursor-not-allowed' // Cambia el color y el cursor cuando está deshabilitado
                            : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300'
                        } text-white font-medium rounded-full text-sm px-5 py-3 text-center border-2 border-primary-600 rounded-md`}
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