"use client";
import React, { MouseEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { login } from '../graphql/mutation';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import logo from '../public/images/Multifruts.png';



const ShowLogin = () => {

    const [mutateLogin, { data, loading, error }] = useMutation(login);

    const router = useRouter()

    //login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


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
        console.log(response);
        if (!response) {
            return alert("Bad Error")
        }
        router.push("/home")

    }


    return (
        <section style={{background: "#FFFFFF"}}>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-5xl font-semibold" style={{color: "#353734"}}>
                    <img className="w-20 h-20 mr-2" src={logo.src} alt="logo" />
                    Multifruits
                </a>
                <div className="w-full shadow md:mt-0 sm:max-w-md xl:p-0" style={{background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 60}}>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                            Inicia sesión con tu cuenta
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label id="email" className="block mb-2 text-sm font-medium text-white">Tu email</label>
                                <input
                                    onChange={(event) => setEmail(event.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    style={{background: "#9acd1b"}}
                                    className="text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-white" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label id="password" className="block mb-2 text-sm font-medium text-white">Contraseña</label>
                                <input
                                    onChange={(event) => setPassword(event.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    style={{background: "#9acd1b"}}
                                    className="text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-white" required />

                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label id="remember" className="text-white">Recuérdame</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Olvidaste tu contraseña?</a>
                            </div>
            
                            <button
                                onClick={(event) => handleLogin(event)}
                                style={{background: "#9acd1b"}}
                                className="w-fit text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    Iniciar sesión
                            </button>
                
                            <p className="text-sm font-light text-white">
                                Aún no tienes cuenta? <Link href="register" className="font-medium text-primary-600 hover:underline">Regístrate</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    );

}

export default ShowLogin;