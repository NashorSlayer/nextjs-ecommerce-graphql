"use client"
import React, { MouseEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { register } from '../graphql/mutation';
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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

        const response = await mutateRegister({
            variables: {
                input: {
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: LastName,

                }
            },
        });
        console.log(response);
        if (!response) {
            return alert("Bad Error")
        }
        router.push("/login")
    }



    return (

        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Multfruits
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign up your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label id="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    onChange={(event) => setEmail(event.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label id="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your firstName</label>
                                <input
                                    onChange={(event) => setFirstName(event.target.value)}
                                    type="text"
                                    name="text"
                                    id="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="FirstName" required />
                            </div>
                            <div>
                                <label id="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your LasttName</label>
                                <input
                                    onChange={(event) => setLastName(event.target.value)}
                                    type="text"
                                    name="text"
                                    id="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="LastName" required />
                            </div>

                            <div>
                                <label id="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    onChange={(event) => setPassword(event.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

                            </div>
                            <div>
                                <label id="RepeatPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat Password</label>
                                <input
                                    onChange={(event) => setRepeatPassword(event.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

                            </div>
                            <button
                                onClick={(event) => handleRegister(event)}
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Do have an account? <Link href="login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )


}




export default ShowRegister;