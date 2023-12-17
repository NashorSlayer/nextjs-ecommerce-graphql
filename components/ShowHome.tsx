"use client";
import { FilterIcon, RefreshIcon } from "@heroicons/react/solid";

const ShowHome = () => {
    return (
      <section className="min-h-screen flex">
        <aside className="w-1/5 h-1/2 bg-gray-700 p-5 rounded shadow-md mt-auto mb-auto text-sm ml-3">
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
  
        <main className="flex-1 p-6">
          {/* <p className="text-2xl font-semibold text-white flex items-center justify-center">Aquí van los productos :D</p> */}
        </main>
  
        <aside className="w-1/5 h-1/2 bg-gray-700 p-5 rounded shadow-md mt-auto mb-auto text-sm mr-3">
          <h2 className="flex items-center justify-center text-white font-semibold mb-4">
            ORDENAR
            <RefreshIcon className="w-8 h-8 ml-2 text-gray-300" />
          </h2>
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