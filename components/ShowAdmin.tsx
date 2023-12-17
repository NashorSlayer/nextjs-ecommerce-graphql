"use client"

import React from 'react';

const ShowAdmin = () => {
  return (
    <section className="h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 text-lg">
          <div className="p-4 space-y-3">
            <h2 className="flex items-center justify-center text-xl font-bold text-gray-900 dark:text-white">
              Panel de Administración
            </h2>
            <div className="flex flex-col space-y-4">
              {/* Sección Usuarios */}
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-bold">Usuarios</p>
                <button className="mt-4 w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-full text-sm px-5 py-3 text-center border-2 border-primary-600 rounded-md">Gestionar Usuarios</button>
                {/* Agrega más funcionalidades de usuarios según sea necesario */}
              </div>

              {/* Sección Productos */}
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-bold">Productos</p>
                <button className="mt-4 w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-full text-sm px-5 py-3 text-center border-2 border-primary-600 rounded-md">Editar Información de Productos</button>
                <button className="mt-2 w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-full text-sm px-5 py-3 text-center border-2 border-primary-600 rounded-md">Añadir Stock</button>
                {/* Agrega más funcionalidades de productos según sea necesario */}
              </div>

              {/* Sección Categorías */}
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-bold">Categorías</p>
                <button className="mt-4 w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-full text-sm px-5 py-3 text-center border-2 border-primary-600 rounded-md">Editar Categorías</button>
                {/* Agrega más funcionalidades de categorías según sea necesario */}
              </div>

              {/* Sección Cupones */}
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-bold">Cupones</p>
                <button className="mt-4 w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-full text-sm px-5 py-3 text-center border-2 border-primary-600 rounded-md">Añadir Cupones</button>
                <button className="mt-2 w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-full text-sm px-5 py-3 text-center border-2 border-primary-600 rounded-md">Eliminar / Deshabilitar Cupones</button>
                {/* Agrega más funcionalidades de cupones según sea necesario */}
              </div>

              {/* Agrega más secciones según sea necesario */}
            </div>
          </div>
        </div>
    </section>
  );
};

export default ShowAdmin;