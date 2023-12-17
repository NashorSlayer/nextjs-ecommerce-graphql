"use client"
import React, { MouseEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { register } from '../graphql/mutation';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HomeIcon } from '@heroicons/react/solid';

const ShowRegister = () => {


    const [mutateRegister, { data, loading, error }] = useMutation(register);

    const router = useRouter()

    //login
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleRegister = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (password !== repeatPassword) {
            return alert("Password don't match");
        }

        // const response = await mutateRegister({
        //     variables: {
        //         input: {
        //             email: email,
        //             password: password,
        //             firstName: firstName,
        //             lastName: LastName,

        //         }
        //     },
        // });
        // console.log(response);
        // if (!response) {
        //     return alert("Bad Error")
        // }
        router.push("/login")
    }



    return (

        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/" className="flex items-center mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-20 h-20" src="multifruts_logo.png" alt="logo" />
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700" style={{background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 60}}>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="flex items-center justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Registro
                        </h1>
                        <form className="space-y-4 md:space-y-2" action="#">
                            <div>
                                <label id="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                                <input
                                    onChange={(event) => setEmail(event.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    style={{background: "#9acd1b"}}
                                    className="text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-white" 
                                    placeholder="correo@correo.com" 
                                    required />
                            </div>
                            <div>
                                <label id="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                <input
                                    onChange={(event) => setFirstName(event.target.value)}
                                    type="text"
                                    name="text"
                                    id="text"
                                    style={{background: "#9acd1b"}}
                                    className="text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-white" 
                                    placeholder="John" 
                                    required />
                            </div>
                            <div>
                                <label id="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                                <input
                                    onChange={(event) => setLastName(event.target.value)}
                                    type="text"
                                    name="text"
                                    id="text"
                                    style={{background: "#9acd1b"}}
                                    className="text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-white" 
                                    placeholder="Doe" 
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
                                    style={{background: "#9acd1b"}}
                                    className="text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-white" 
                                    required />

                            </div>
                            <div>
                                <label id="RepeatPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar contraseña</label>
                                <input
                                    onChange={(event) => setRepeatPassword(event.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    style={{background: "#9acd1b"}}
                                    className="text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-white" 
                                    required />

                            </div>
                            <button
                                onClick={(event) => handleRegister(event)}
                                className="w-full ml-12 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium text-sm px-5 py-3 text-center border-2 border-primary-600"style={{width: "80%", backgroundColor: "#9acd1b", borderRadius: 20}}>Regístrate</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                               ¿Ya tienes una cuenta? <Link href="login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Inicia sesión</Link>
                            </p>
                            <p className="flex items-center justify-center text-sm font-light text-gray-300 dark:text-gray-200"><Link href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500"><HomeIcon className="w-6 h-6 ml-4 text-gray-300"/></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}




export default ShowRegister;