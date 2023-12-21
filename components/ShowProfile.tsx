"use client";
import { useState } from "react";
import { PencilIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/navigation';
import { updateUser } from "../graphql/mutation";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { UpdateAddress } from "../redux/userSlice";
import { useMutation } from "@apollo/client";

const ShowProfile = () => {
    const user = useAppSelector((state) => state.user);
    const profileData = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };

      const router = useRouter()
    
    const handleShoppingHistory = () => {
        router.push("/profile/shoppingHistory")
      };


      return (
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full shadow md:mt-0 sm:max-w-md xl:p-0"style={{background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 60}}>
              <div className="p-4 space-y-3 md:space-y-4 sm:p-6">
                <h1 className="flex items-center justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Información del perfil
                </h1>
                <div>
                  <label className="flex items-center justify-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                  <p className="flex items-center justify-center">{profileData.firstName}</p>
                </div>
                <div>
                  <label className="flex items-center justify-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                  <p className="flex items-center justify-center">{profileData.lastName}</p>
                </div>
                <div>
                  <label className="flex items-center justify-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electrónico</label>
                  <p className="flex items-center justify-center">{profileData.email}</p>
                </div>
                <button
                  onClick={handleShoppingHistory}
                  className="mt-4 ml-10 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium text-sm px-5 py-3 text-center border-2 border-primary-600" style={{width: "80%", backgroundColor: "#9acd1b", borderRadius: 20}}>
                  Historial de Compras
                </button>
              </div>
            </div>
          </div>
        </section>
      );
}

export default ShowProfile;