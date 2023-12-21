"use client"
import React from "react";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

const Payment: React.FC = () => {
    const payment = useSelector((state: RootState) => state.payment);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form className="bg-white p-8 rounded shadow-md max-w-md" method="post" action={payment.url}>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Proceso de Pago</h2>

                <input
                    type="hidden"
                    name="token_ws"
                    value={payment.token_ws}
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                >
                    Ir a pagar
                </button>
            </form>
        </div>
    );
}

export default Payment;