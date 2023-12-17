"use client";
import { FilterIcon, RefreshIcon, ExclamationIcon } from "@heroicons/react/solid";
import ProductCard from './ProductCard';
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  stock: number;
  price: number;
  image: string;
  description: string;
};

const products: Product[] = [
  // Hacer llamada al backend para obtener los productos
  {
    id: 1,
    name: 'Producto 1',
    category: 'Categoría 1',
    stock: 10,
    price: 10000,
    image: 'no-image.jpg',
    description: 'Descripción del producto 1',
  },
  {
    id: 2,
    name: 'Producto 2',
    category: 'Categoría 2',
    stock: 20,
    price: 20000,
    image: 'no-image.jpg',
    description: 'Descripción del producto 2',
  },
  {
    id: 3,
    name: 'Producto 3',
    category: 'Categoría 3',
    stock: 30,
    price: 30000,
    image: 'no-image.jpg',
    description: 'Descripción del producto 3',
  },
  {
    id: 4,
    name: 'Producto 4',
    category: 'Categoría 4',
    stock: 40,
    price: 40000,
    image: 'no-image.jpg',
    description: 'Descripción del producto 4',
  },
  {
    id: 5,
    name: 'Producto 5',
    category: 'Categoría 5',
    stock: 50,
    price: 50000,
    image: 'no-image.jpg',
    description: 'Descripción del producto 5',
  },
  {
    id: 6,
    name: 'Producto 6',
    category: 'Categoría 6',
    stock: 60,
    price: 60000,
    image: 'no-image.jpg',
    description: 'Descripción del producto 6',
  },
];  

const ShowHome = () => {
    const productsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
      <section className="min-h-screen flex">
        <aside className="w-1/5 h-1/2 bg-gray-700 p-5 rounded shadow-md mt-auto mb-auto text-sm ml-3" style={{borderRadius: 20}}>
          <h2 className="flex items-center justify-center text-white font-semibold mb-4">
            FILTRAR
            <FilterIcon className="w-8 h-8 ml-2 text-gray-300" />
          </h2>
          <label className="text-white" htmlFor="discount">
            Descuento:
          </label>
          <select id="discount" className="bg-gray-300 w-full p-2 mb-4 text-black rounded">
            <option value="none">Sin descuento</option>
            <option value="fifty">Hasta 50%</option>
            <option value="sixty">Hasta 60%</option>
            <option value="seventy">Hasta 70%</option>
            <option value="eighty">Hasta 80%</option>
            <option value="ninety">Hasta 90%</option>
          </select>
  
          <label className="text-white" htmlFor="category_filter">
            Categoría:
          </label>
          <select id="category_filter" className="bg-gray-300 w-full p-2 mb-4 text-black rounded">
            <option value="Todos">Todos</option>
            <option value="Mix">Mix</option>
            <option value="A granel">A granel</option>
            <option value="Condimentos y especias">Condimentos y especias</option>
            <option value="Legumbre">Legumbre</option>
            <option value="Cereales">Cereales</option>
            <option value="Harina">Harina</option>
            <option value="Cetortillas">Cetortillas</option>
            <option value="Aceites envasados">Aceites envasados</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Beanies">Beanies</option>
            <option value="Café y t">Café y té</option>
            <option value="Hierbas">Hierbas</option>
            <option value="Snacks saludables">Snacks saludables</option>
            <option value="Proteínas">Proteínas</option>
            <option value="Chocolates">Chocolates</option>
            <option value="Pastelería">Pastelería</option>
            <option value="Edulzantes">Edulzantes</option>
            <option value="Otros">Otros</option>
          </select>
  
          <label className="text-white" htmlFor="minPrice">
            Rango de precios:
          </label>
          <div className="flex mb-4">
            <input type="number" id="minPrice" placeholder="Min" className="bg-gray-300 w-1/2 p-2 mr-2 text-black rounded" min="0"/>
            <span className="text-white" style={{ lineHeight: '2.2' }}>-</span>
            <input type="number" id="maxPrice" placeholder="Max" className="bg-gray-300 w-1/2 p-2 ml-2 text-black rounded" min="0"/>
          </div>
          <button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-full text-sm px-5 py-3 text-center border-2 border-primary-600 rounded-md">
            Aplicar filtros
          </button>
        </aside>
  
        <main className="flex-1 p-6 bg-gray-700 p-5 rounded shadow-md mt-auto mb-auto text-sm ml-12 mr-12" style={{borderRadius: 20}}>
          {currentProducts.length > 0 ? (
            <div className="grid gap-1">
              {currentProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          ) : (
            <>
              <p className="text-gray-400 flex items-center justify-center"><ExclamationIcon className="w-20 h-20" /></p>
              <p className="text-gray-400 flex items-center justify-center text-white font-semibold">No hay productos disponibles con esta configuración. Intenta ajustar los parámetros.</p>
            </>
          )}

          <div className="mt-4 flex justify-center">
            {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
              <button
                key={index}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === index + 1 ? 'bg-gray-300 text-black' : 'bg-primary-500 text-white'
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </main>

        <aside className="w-1/5 h-1/2 bg-gray-700 p-5 rounded shadow-md mt-auto mb-auto text-sm mr-3" style={{borderRadius: 20}}>
          <h2 className="flex items-center justify-center text-white font-semibold mb-4">
            ORDENAR
            <RefreshIcon className="w-8 h-8 ml-2 text-gray-300" />
          </h2>
          <label className="text-white" htmlFor="products">Productos:</label>
          <select id="products" className="bg-gray-300 w-full p-2 mb-4 rounded text-black">
            <option value="popular">Populares</option>
            <option value="newest">Nuevos</option>
            <option value="orderless">Sin ordenar</option>
          </select>
          <label className="text-white" htmlFor="price">Precio:</label>
          <select id="price" className="bg-gray-300 w-full p-2 mb-4 rounded text-black">
            <option value="orderless">Sin ordenar</option>
            <option value="lowest_price">Desde el más barato</option>
            <option value="highest_price">Desde el más caro</option>
          </select>
          <label className="text-white" htmlFor="name">Nombre:</label>
          <select id="name" autoComplete="name" className="bg-gray-300 w-full p-2 mb-4 rounded text-black">
            <option value="orderless">Sin ordenar</option>
            <option value="A-Z_name">De la A a la Z</option>
            <option value="Z-A_name">De la Z a la A</option>
          </select>
          <label className="text-white" htmlFor="category">Categoría:</label>
          <select id="category" className="bg-gray-300 w-full p-2 mb-4 rounded text-black">
            <option value="orderless">Sin ordenar</option>
            <option value="A-Z_category">De la A a la Z</option>
            <option value="Z-A_category">De la Z a la A</option>
          </select>
          <label className="text-white" htmlFor="stock">Stock:</label>
          <select id="stock" className="bg-gray-300 w-full p-2 mb-4 rounded text-black">
            <option value="orderless">Sin ordenar</option>
            <option value="lowest_stock">Desde menor stock</option>
            <option value="highest_stock">Desde mayor stock</option>
          </select>
          <button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-full text-sm px-5 py-3 text-center border-2 border-primary-600 rounded-md">
            Aplicar orden
          </button>
        </aside>
      </section>
    );
  };

export default ShowHome;