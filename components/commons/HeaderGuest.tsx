"use client";
import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks';
// @ts-ignore
import { SearchIcon, MenuIcon, ShoppingCartIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import CartDetailsPopup from '../CartDetailsPopup';

const HeaderGuest = () => {
    const cartItems = useAppSelector((state) => state.cart.products);
    const [showCartDetails, setShowCartDetails] = useState<boolean>(false);

    const getTotalQuantity = () => {
        return cartItems.reduce((total, product) => total + product.quantity, 0);
    };

    const toggleCartDetails = () => {
        setShowCartDetails(!showCartDetails);
    };

    return (
        <header className="bg-gray-800">
            <div className="container mx-auto flex items-center justify-between p-4">
                <Link href="/">
                    <img className="w-12 h-12" src="multifruts_logo.png" alt="Logo" />
                </Link>
                <div className="flex-grow ml-4">
                <input
                    id="search"
                    name='search'
                    type="text"
                    placeholder="Buscar productos"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 text-gray-900"
                    />
                </div>
                <button>
                    <SearchIcon className="w-8 h-8 ml-2 text-gray-300" />
                </button>
                <div className="flex items-center flex-col">
                    <div className="flex items-center">
                        <LocationMarkerIcon className="w-8 h-8 ml-4 text-gray-300" />
                        <select
                        id='location'
                        name='location'
                        className="font-bold mx-auto text-white hover:underline bg-transparent appearance-none w-auto border-b-2 border-gray-300 focus:outline-none focus:border-primary-500 rounded-md text-sm p-2"
                        style={{ textAlign: 'center', maxWidth: '100%' }}
                        >
                            <option className='bg-gray-800 text-white hover:bg-gray-700'>Eduardo de la Barra 487, La Serena</option>
                            <option className='bg-gray-800 text-white hover:bg-gray-700'>Miramar 5252, Peñuelas</option>
                            <option className='bg-gray-800 text-white hover:bg-gray-700'>Guillermo Ulriksen 2801, La Serena </option>
                        </select>
                    </div>
                </div>
                <div className="ml-4 flex items-center space-x-4">
                    <Link href="/login" className="text-white hover:underline">Iniciar sesión</Link>
                    <Link href="/register" className="text-white hover:underline">Registrarse</Link>
                </div>
                    <button className="relative" onClick={toggleCartDetails}>
                        <ShoppingCartIcon className="w-8 h-8 ml-4 text-gray-300" />
                        {cartItems.length > 0 && (
                        <span className="absolute -top-1 -right-7 bg-red-500 text-white px-2 py-1 rounded-full">
                            {getTotalQuantity()}
                        </span>
                        )}
                    </button>
                {showCartDetails && <CartDetailsPopup onClose={toggleCartDetails} />}
            </div>
        </header>
    );
}

export default HeaderGuest;