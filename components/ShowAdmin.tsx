"use client"

import React from 'react';

const ShowAdmin = () => {
  return (
    <section className="h-screen flex items-center justify-center">
        <div className="bg-white shadow text-lg"style={{background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 50}}>
          <div className="p-4 space-y-3">
            <h2 className="flex items-center justify-center text-xl font-bold text-gray-900 dark:text-white">
              Panel de Administración
            </h2>
            <div className="flex flex-col space-y-4">
              {/* Sección Productos */}
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-bold">Productos</p>
                <button className="mt-4 ml-10 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium text-sm px-5 py-3 text-center border-2 border-primary-600" style={{width: "80%", backgroundColor: "#9acd1b", borderRadius: 20}}>Editar Información de Productos</button>
                <button className="mt-4 ml-10 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium text-sm px-5 py-3 text-center border-2 border-primary-600" style={{width: "80%", backgroundColor: "#9acd1b", borderRadius: 20}}>Añadir Stock</button>
                {/* Agrega más funcionalidades de productos según sea necesario */}
              </div>

              {/* Sección Categorías */}
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-bold">Categorías</p>
                <button className="mt-4 ml-10 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium text-sm px-5 py-3 text-center border-2 border-primary-600" style={{width: "80%", backgroundColor: "#9acd1b", borderRadius: 20}}>Editar Categorías</button>
                {/* Agrega más funcionalidades de categorías según sea necesario */}
              </div>

              {/* Sección Cupones */}
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-bold">Cupones</p>
                <button className="mt-4 ml-10 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium text-sm px-5 py-3 text-center border-2 border-primary-600" style={{width: "80%", backgroundColor: "#9acd1b", borderRadius: 20}}>Añadir Cupones</button>
                <button className="mt-4 ml-10 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium text-sm px-5 py-3 text-center border-2 border-primary-600" style={{width: "80%", backgroundColor: "#9acd1b", borderRadius: 20}}>Eliminar / Deshabilitar Cupones</button>
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