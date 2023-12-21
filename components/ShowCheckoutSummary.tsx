"use client";

import React, { use, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import CartCheckout from './CartCheckout';
import { confirmTransaction, createTransaction } from "../graphql/mutation";
import { useMutation } from '@apollo/client';
import { updatePayment } from '@/redux/paymentSlice';
import { useRouter } from 'next/navigation';
const CheckoutSummary = () => {
  const [mutatePayment] = useMutation(createTransaction);
  const [mutateConfirmPayment] = useMutation(confirmTransaction);


  const [shippingAddress, setShippingAddress] = useState('');
  const [pickupPerson, setPickupPerson] = useState('');
  const [pickupRut, setPickupRut] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('domicilio');

  const cartItems = useAppSelector((state) => state.cart.products);
  const cartTotal = useAppSelector((state) => state.cart.total);

  const token_ws = localStorage.getItem('token_ws');
  const router = useRouter()
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(localStorage.getItem('token_ws'));
    if (token_ws !== '') {
      const confirmPayment = async () => {
        const response = await mutateConfirmPayment({
          variables: {
            ws_token: token_ws
          }
        });
        if (!response) {
          return alert("Bad Error")
        }
        if (response.data.confirmPayment.status === 'AUTHORIZED') {
          console.log("Payment confirmed");
        }
      }
      confirmPayment();

    }
  }, []);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.trim() !== '') {
      setShippingAddress(inputValue);
      setPickupPerson('');
      setPickupRut('');
    }
  };

  const handleDeliveryOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const option = e.target.value;
    setDeliveryOption(option);
    setShippingAddress('');
  };

  const handlePayment = async () => {
    const response = await mutatePayment({
      variables: {
        payment: {
          amount: cartTotal,
        }
      },
    });
    if (!response) {
      return alert("Bad Error")
    }
    const payload = response.data.createPayment;
    dispatch(updatePayment({
      url: payload.url,
      token_ws: payload.token
    }));
    localStorage.setItem('token_ws', payload.token);
    router.push("/cart/checkout/payment");
  };



  return (
    <section>
      <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="grid grid-cols-[3fr,1fr] gap-8 w-full max-w-screen-xl">
          <div className="bg-white rounded-lg shadow" style={{ background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 60 }}>
            <div className="p-4 space-y-3">
              <h2 className="flex items-center justify-center text-lg font-bold text-gray-900 dark:text-white">
                Productos en el Carrito
              </h2>
              {cartItems.length === 0 ? (
                <>
                  <p className="text-gray-400 flex items-center justify-center">
                  </p>
                  <p className="flex items-center justify-center text-sm font-light text-gray-500 dark:text-gray-400">
                    No tienes productos en el carrito.
                  </p>
                </>
              ) : (
                <table className="min-w-full table-auto divide-y divide-gray-200">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" style={{ background: "#353734" }}>
                        Producto
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" style={{ background: "#353734" }}>
                        Cantidad
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase" style={{ background: "#353734" }}>
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {cartItems.map((productProp, index) => (
                      <CartCheckout key={index} product={productProp.product} quantity={productProp.quantity} />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow" style={{ background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 60 }}>
            <div className="p-10 space-y-10">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Resumen de Compra</h2>
              <table className="min-w-full table-auto">
                <tbody>
                  <tr>
                    <td className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Total:</td>
                    <td className="px-4 py-2 text-right text-xs font-medium">${cartTotal}</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex items-center justify-center space-x-4">
                <div>
                  <input
                    type="radio"
                    id="domicilio"
                    name="envio"
                    value="domicilio"
                    onChange={handleDeliveryOptionChange}
                    checked={deliveryOption === 'domicilio'}
                  />
                  <label htmlFor="domicilio" className="ml-2 text-sm font-medium text-gray-300">
                    A Domicilio
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="retiro"
                    name="envio"
                    value="retiro"
                    onChange={handleDeliveryOptionChange}
                    checked={deliveryOption === 'retiro'}
                  />
                  <label htmlFor="retiro" className="ml-2 text-sm font-medium text-gray-300">
                    Retiro en Tienda
                  </label>
                </div>
              </div>

              {deliveryOption === 'domicilio' && (
                <div className="mt-4">
                  <label htmlFor="direccion" className="block text-sm font-medium text-gray-300">
                    Dirección de Envío:
                  </label>
                  <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    onChange={handleAddressChange}
                    placeholder="Ej: Calle 1234, La Serena"
                    className="mt-1 p-2 w-full border rounded-md text-black"
                  />
                </div>
              )}
              {deliveryOption === 'retiro' && (
                <div className="mt-4">
                  <label htmlFor="pickupPerson" className="block text-sm font-medium text-gray-300">
                    Persona que retira:
                  </label>
                  <input
                    type="text"
                    id="pickupPerson"
                    name="pickupPerson"
                    value={pickupPerson}
                    onChange={(e) => setPickupPerson(e.target.value)}
                    placeholder='Ej: Juan Pérez'
                    className="mt-1 p-2 w-full border rounded-md text-black"
                  />

                  <label htmlFor="pickupRut" className="block text-sm font-medium text-gray-300 mt-2">
                    RUT de la persona que retira:
                  </label>
                  <input
                    type="text"
                    id="pickupRut"
                    name="pickupRut"
                    value={pickupRut}
                    onChange={(e) => setPickupRut(e.target.value)}
                    placeholder='Ej: 12.345.678-9'
                    className="mt-1 p-2 w-full border rounded-md text-black"
                  />
                </div>
              )}
              <div className="flex items-center justify-center">
                <button
                  disabled={cartItems.length === 0}
                  style={{ width: "80%", backgroundColor: "#9acd1b", borderRadius: 20 }}
                  onClick={handlePayment}
                  className={`${cartItems.length === 0
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

export default CheckoutSummary;