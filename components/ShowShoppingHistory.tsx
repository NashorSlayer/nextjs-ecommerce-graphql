"use client";

import { SetStateAction, useState } from "react";

const ShowShoppingHistory = () => {
  const shoppingData = [
    {
      purchaseCode: 'ABC123',
      products: [
        { name: 'Producto 1', quantity: 2 },
        { name: 'Producto 2', quantity: 1 },
      ],
      total: 150.00,
      shippingAddress: '123 Calle Principal, Ciudad, País',
    },
    {
      purchaseCode: 'DEF456',
      products: [
        { name: 'Producto 3', quantity: 3 },
        { name: 'Producto 1', quantity: 2 },
      ],
      total: 340.90,
      shippingAddress: 'Larrondo 123, Ciudad, País',
    },
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentShoppingData = shoppingData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: SetStateAction<number>) => setCurrentPage(pageNumber);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-auto max-w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 space-y-3 md:space-y-4 sm:p-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Historial de Compras
            </h1>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto divide-y divide-gray-200">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Código de Compra
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Productos
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cantidad
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Dirección de Envío
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-700">
                  {currentShoppingData.map((purchase) => (
                    <tr key={purchase.purchaseCode}>
                      <td className="px-6 py-4 whitespace-nowrap">{purchase.purchaseCode}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <ul>
                          {purchase.products.map((product, index) => (
                            <li key={index}>{`${product.name}`}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <ul>
                          {purchase.products.map((product, index) => (
                            <li key={index}>{`${product.quantity}`}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">${purchase.total}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{purchase.shippingAddress}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end px-4 py-3 border-t border-gray-200 dark:border-gray-700 sm:px-6">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Mostrando {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, shoppingData.length)} de {shoppingData.length} compras
        </p>
        <nav className="relative z-0 inline-flex -space-x-px" aria-label="Pagination">
          {Array.from({ length: Math.ceil(shoppingData.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-2 text-sm font-medium leading-5 text-gray-500 bg-white border border-gray-300 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-100 active:text-gray-700 ${
                currentPage === index + 1 ? "bg-gray-100" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default ShowShoppingHistory;