"use client";
import React, { MouseEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { login } from '../graphql/mutation';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { HomeIcon } from '@heroicons/react/solid';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { GetUser } from '../redux/userSlice';

const ShowLogin = () => {

    const [mutateLogin, { data, loading, error }] = useMutation(login);
    const user = useAppSelector((state) => state.user);
    const router = useRouter()

    //login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const handleLogin = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const response = await mutateLogin({
            variables: {
                input: {
                    email: email,
                    password: password,
                }
            },
        });
        if (!response) {
            return alert("Bad Error")
        }

        const payload = response.data.login;
        const user = payload.user;
        localStorage.setItem("token", payload.access_token);
        dispatch(GetUser({
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            Cart: user.Cart,
            Historical: user.Historical,
        }));
        router.push("/")

    }


    return (
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/" className="flex items-center mb-6 text-2xl">
                    <img className="w-40 h-40" src="multifruts_logo.png" alt="logo" />
                </a>
                <div className="w-full shadow md:mt-0 sm:max-w-md xl:p-0" style={{ background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 60 }}>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="flex items-center justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Iniciar sesión
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label id="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                                <input
                                    onChange={(event) => setEmail(event.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    style={{ background: "#9acd1b" }}
                                    className="text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-white"
                                    placeholder="correo@correo.com"
                                    required />
                            </div>
                            <div>
                                <label id="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <input
                                    onChange={(event) => setPassword(event.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    style={{ background: "#9acd1b" }}
                                    className="text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-white"
                                    required />

                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label id="remember" className="text-gray-500 dark:text-gray-300">Recordar</label>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={(event) => handleLogin(event)}
                                className="w-full ml-10 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium text-sm px-5 py-3 text-center border-2 border-primary-600" style={{ width: "80%", backgroundColor: "#9acd1b", borderRadius: 20 }}>Iniciar sesión</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                ¿Aún no tienes un cuenta? <Link href="register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Regístrate</Link>
                            </p>
                            <p className="flex items-center justify-center text-sm font-light text-gray-300 dark:text-gray-200"><Link href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500"><HomeIcon className="w-6 h-6 ml-4 text-gray-300" /></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    );

}

export default ShowLogin;
