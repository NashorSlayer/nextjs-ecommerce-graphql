"use client";
import { useState } from "react";
import { PencilIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/navigation'

const ShowProfile = () => {
    const profileData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        address: '123 Main St. Anytown, USA',
      };
    
      const [address, setAddress] = useState(profileData.address);

      const router = useRouter()
    
      const handleUpdateProfile = () => {
        // Implementar la lógica para actualizar los datos del perfil
      };
    
    const handleShoppingHistory = () => {
        router.push("/profile/shoppingHistory")
      };

    const handleUpdateProfilePicture = () => {
        // Implementar la lógica para actualizar la foto de perfil
      };

      return (
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-4 space-y-3 md:space-y-4 sm:p-6">
                <h1 className="flex items-center justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Información del perfil
                </h1>
                <div className="flex items-center justify-center">
                    <img src="no-photo.jpg" alt="Foto de perfil" className="w-20 h-20 rounded-full" />
                    <button onClick={handleUpdateProfilePicture}>
                        <PencilIcon className="mt-14 w-6 h-6 text-gray-300"/>
                    </button>
                    </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                  <p>{profileData.firstName}</p>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                  <p>{profileData.lastName}</p>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electrónico</label>
                  <p>{profileData.email}</p>
                </div>
                <div>
                                <label id="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección</label>
                                <input
                                    onChange={(event) => setAddress(event.target.value)}
                                    type="address"
                                    name="address"
                                    id="address"
                                    value={address}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dirección" required />
                            </div>
                <button
                  onClick={handleUpdateProfile}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-full text-sm px-5 py-3 text-center border-2 border-primary-600 rounded-md">
                  Actualizar Datos
                </button>
                <button
                  onClick={handleShoppingHistory}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-full text-sm px-5 py-3 text-center border-2 border-primary-600 rounded-md">
                  Historial de Compras
                </button>
              </div>
            </div>
          </div>
        </section>
      );
}

export default ShowProfile;