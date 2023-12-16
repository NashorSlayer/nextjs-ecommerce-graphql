"use client"
import React, { MouseEvent, useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import { register } from '../graphql/mutation';
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const ShowResetPassword = () => {

    const [mutateRegister, { data, loading, error }] = useMutation(register);

    const router = useRouter()

    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
    const [showPopup, setShowPopup] = useState(false);
    const inputRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()]);
    const [showChangePasswordPopup, setShowChangePasswordPopup] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        // Implementar la lógica para enviar el código de verificación al correo electrónico

        setShowPopup(true);
    }

    const handleVerifyCode = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        // Implementar la lógica para verificar el código ingresado por el usuario
        // Si la verificación del código es exitosa, muestra el pop-up de cambio de contraseña
        setShowChangePasswordPopup(true);
    }

    const handleChange = (index:number, value:string) => {
        const newVerificationCode = [...verificationCode];
        newVerificationCode[index] = value;
        setVerificationCode(newVerificationCode);

        if (value !== '' && index < inputRefs.current.length - 1) {
            (inputRefs.current[index + 1].current as HTMLInputElement).focus();
        }
    };

    const handleBackspace = (index:number, value:string) => {
        if (value === '' && index > 0) {
            (inputRefs.current[index - 1].current as HTMLInputElement).focus();
        }
      };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    
    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const handleChangePassword = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // Implementar la lógica para cambiar la contraseña
        router.push("/login");
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/" className="flex items-center mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-40 h-40" src="multifruts_logo.png" alt="logo" />
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
                        <h1 className="flex items-center justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Recuperar contraseña
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label id="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                                <input
                                    onChange={(event) => setEmail(event.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="correo@correo.com" required />
                            </div>
                        </form>
                        <button
                            onClick={(event) => handleResetPassword(event)}
                            className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-full text-sm px-5 py-3 text-center border-2 border-primary-600 rounded-md">
                                Enviar código de verificación
                        </button>
                        {showPopup && !showChangePasswordPopup && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                            <div className="relative w-auto max-w-sm mx-auto my-6">
                            <div className="relative flex flex-col bg-gray-600 border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                <h3 className="text-xl font-semibold text-white">Ingresa el código de verificación enviado tu correo</h3>
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="p-1 ml-auto bg-transparent border-0 text-white opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                >
                                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <div className="flex mb-4">
                                    {verificationCode.map((digit, index) => (
                                        <input
                                        key={index}
                                        type="text"
                                        value={digit}
                                        onChange={(e) => handleChange(index, e.target.value)}
                                        onKeyDown={(e) => e.key === 'Backspace' && handleBackspace(index, verificationCode[index])}
                                        maxLength={1}
                                        className="w-1/6 p-2 mx-1 mb-2 border border-gray-300 rounded-md text-black text-center"
                                        placeholder="*"
                                        ref={inputRefs.current[index] as React.RefObject<HTMLInputElement>}
                                        />
                                    ))}
                                    </div>
                                <button
                                    onClick={(event) => handleVerifyCode(event)}
                                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-full text-sm px-5 py-3 text-center border-2 border-primary-600 rounded-md"
                                >
                                    Verificar código
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        )}
                        {showChangePasswordPopup && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                                <div className="relative w-auto max-w-sm mx-auto my-6">
                                    <div className="relative flex flex-col bg-gray-600 border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                            <h3 className="text-xl font-semibold text-white">Cambiar Contraseña</h3>
                                            <button
                                                onClick={() => setShowChangePasswordPopup(false)}
                                                className="p-1 ml-auto bg-transparent border-0 text-white opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            >
                                                <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                            </button>
                                        </div>
                                        <div className="relative p-6 flex-auto">
                                            <div className="mb-4">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                                <input
                                                    onChange={handlePasswordChange}
                                                    type="password"
                                                    value={password}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Contraseña"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar Contraseña</label>
                                                <input
                                                    onChange={handleConfirmPasswordChange}
                                                    type="password"
                                                    value={confirmPassword}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Confirmar Contraseña"
                                                    required
                                                />
                                            </div>
                                            <button
                                                onClick={(event) => handleChangePassword(event)}
                                                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-full text-sm px-5 py-3 text-center border-2 border-primary-600 rounded-md"
                                            >
                                                Cambiar Contraseña
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Volver al inicio de sesión</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowResetPassword;