
import { FilterIcon, RefreshIcon, ExclamationIcon } from "@heroicons/react/solid";
import ProductCard from './ProductCard';
import { useState } from "react";
import React from "react";
import { GetProducts } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import { ProductState } from "@/redux/productSlice";

const products = [
  {
  id: '14',
  name: 'Catortillas gold',
  category: 'Cetortillas',
  price: 6200,
  stock: 10,
  image: 'https://wlpkyuxyktvvqgezhwsx.supabase.co/storage/v1/object/public/images/CETORTILLAS-GOLD-9-UNIDADES-LOW-.jpg?t=2023-12-21T07%3A22%3A48.518Z',
  description: 'Catortillas gold'
  },
  {
  id: '1',
  name: 'Mix MULTIFRUTS',
  category: 'Mix',
  price: 8900,
  stock: 10,
  image: 'https://wlpkyuxyktvvqgezhwsx.supabase.co/storage/v1/object/public/images/Mix_multifruts.jpg?t=2023-12-21T07%3A19%3A04.148Z',
  description: 'Mix de almendras, nuez, pasa rubia, mani, goji, coco laminado, cranberry'
  },
  {
  id: '2',
  name: 'Mix Proteina',
  category: 'Mix',
  price: 8200,
  stock: 10,
  image: 'https://wlpkyuxyktvvqgezhwsx.supabase.co/storage/v1/object/public/images/Mix-Proteina.jpg?t=2023-12-21T07%3A19%3A15.120Z',
  description: 'Mix de almendras, pepa de zapallo y mani sin sal'
  },
  {
  id: '3',
  name: 'Almendra de primera',
  category: 'A Granel',
  price: 10300,
  stock: 10,
  image: 'https://wlpkyuxyktvvqgezhwsx.supabase.co/storage/v1/object/public/images/Almendras%20de%20primera.jpg?t=2023-12-21T07%3A20%3A22.149Z',
  description: 'Almendras de primera categoria'
  },
  {
  id: '4',
  name: 'Avellana europea',
  category: 'A Granel',
  price: 15600,
  stock: 10,
  image: 'https://wlpkyuxyktvvqgezhwsx.supabase.co/storage/v1/object/public/images/Avellana%20europea.jpg?t=2023-12-21T07%3A20%3A45.335Z',
  description: 'Avellana traida de europa'
  },
  {
  id: '5',
  name: 'Aji Color',
  category: 'Condimentos y Especias',
  price: 4760,
  stock: 10,
  image: 'https://wlpkyuxyktvvqgezhwsx.supabase.co/storage/v1/object/public/images/Aji%20Color.jpg?t=2023-12-21T07%3A20%3A53.419Z',
  description:'Aji Color'
  },
  {
  id: '6',
  name: 'Aliño Completo',
  category: 'Condimentos y Especias',
  price: 5300,
  stock: 10,
  image: 'https://wlpkyuxyktvvqgezhwsx.supabase.co/storage/v1/object/public/images/alinio-completo.jpg?t=2023-12-21T07%3A21%3A20.948Z',
  description: 'Aliño Completo'
  },
  {
  id: '7',
  name: 'Porotos negros',
  category: 'Legumbres',
  price: 2100,
  stock: 10,
  image: 'https://wlpkyuxyktvvqgezhwsx.supabase.co/storage/v1/object/public/images/porotos-negros-1kilo.jpg?t=2023-12-21T07%3A21%3A29.358Z',
  description: 'Porotos negros'
  },
  {
  id: 8,
  name: 'Lenteja roja sin piel',
  category: 'Legumbres',
  price: 3200,
  stock: 10,
  image: 'https://wlpkyuxyktvvqgezhwsx.supabase.co/storage/v1/object/public/images/lentejas-rojas-1.jpg?t=2023-12-21T07%3A21%3A38.367Z',
  description: 'Lenteja roja sin piel'
  },
  {
  id: '9',
  name: 'Quinoa pop cereal dulce',
  category: 'Cereales',
  price: 10000,
  stock: 10,
  image: 'https://wlpkyuxyktvvqgezhwsx.supabase.co/storage/v1/object/public/images/Quinoa%20pop%20cereal%20dulce.jpg?t=2023-12-21T07%3A21%3A55.056Z',
  description: 'Quinoa pop cereal dulce'
  },
  {
  id: '10',
  name: 'Garbanzo cereal',
  category: 'Cereales',
  price: 10000,
  stock: 10,
  image: 'https://wlpkyuxyktvvqgezhwsx.supabase.co/storage/v1/object/public/images/Garbanzo%20cereales.jpg?t=2023-12-21T07%3A22%3A02.032Z',
  description: 'Garbanzo cereal'
  },
  {
  id: '11',
  name: 'Harina de almendra sin piel',
  category: 'Harina',
  price: 12500,
  stock: 10,
  image: 'https://wlpkyuxyktvvqgezhwsx.supabase.co/storage/v1/object/public/images/Harina-de-almendra-sin-piel-2.jpg?t=2023-12-21T07%3A22%3A10.487Z',
  description: 'Harina de almendra sin piel'
  },
  {
  id: '12',
  name: 'Harina de arroz',
  category: 'Harina',
  price: 1900,
  stock: 10,
  image: 'https://wlpkyuxyktvvqgezhwsx.supabase.co/storage/v1/object/public/images/harina%20de%20arroz.jpg?t=2023-12-21T07%3A22%3A22.127Z',
  description: 'Harina de arroz'
  },
  {
  id: '13',
  name: 'Catortillas Cioccolata',
  category: 'Cetortillas',
  price: 7750,
  stock: 10,
  image: 'https://wlpkyuxyktvvqgezhwsx.supabase.co/storage/v1/object/public/images/cetortillaclasic7093.jpg?t=2023-12-21T07%3A22%3A36.220Z',
  description: 'Catortillas Cioccolata'
  },
  {
  id: '15',
  name: 'Aceite de nuez',
  category: 'Aceites Envasados',
  price: 3600,
  stock: 10,
  image: 'https://wlpkyuxyktvvqgezhwsx.supabase.co/storage/v1/object/public/images/ACEITE-DE-NUEZ-155ML.jpg?t=2023-12-21T07%3A18%3A41.280Z',
  description: 'Aceite de nuez'
  },
  {
  id: '16',
  name: 'Aceite de coco',
  category: 'Aceites Envasados',
  price: 4000,
  stock: 10,
  image: 'https://wlpkyuxyktvvqgezhwsx.supabase.co/storage/v1/object/public/images/aceite-de-coco-500ml-wichy2672.jpg?t=2023-12-21T07%3A23%3A03.556Z',
  description: 'Aceite de coco'
  }
  ];
  

  const ShowHome = () => {
    const productsPerPage = 4;
    const maxPaginationItems = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [originalProducts, setOriginalProducts] = useState(products);
    const [discount, setDiscount] = useState("none");
  
    const availableProducts = originalProducts.filter((product) => product.stock > 0);
  
    const filteredProducts = availableProducts.filter((product) => {
      const categoryFilter = selectedCategory === "Todos" || product.category === selectedCategory;
      const minPriceFilter = minPrice === "" || product.price >= Number(minPrice);
      const maxPriceFilter = maxPrice === "" || product.price <= Number(maxPrice);
      const discountFilter = discount === "none" || product.price > product.price * (1 - Number(discount) / 100);
  
      return categoryFilter && minPriceFilter && maxPriceFilter && discountFilter;
    });
  
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const showDots = totalPages > maxPaginationItems;
  
  
    const renderPaginationItems = () => {
      const items = [];
  
      if (showDots && currentPage > maxPaginationItems - Math.floor(maxPaginationItems / 2)) {
        items.push(
          <button 
          key="start" 
          className="mx-1 px-3 py-1 rounded" 
          style={{background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 60}}
          onClick={() => paginate(1)}>
            1
          </button>,
          <span key="dots-start" className="mx-1 px-3 py-1 rounded">
            ...
          </span>
        );
  
        for (let i = totalPages - maxPaginationItems + 3; i <= totalPages; i++) {
          items.push(
            <button
              key={i}
              style={{background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 60}}
              className={`mx-1 px-3 py-1 rounded ${currentPage === i ? 'bg-gray-300 text-gray-500' : 'bg-primary-500 text-white'}`}
              onClick={() => paginate(i)}
            >
              {i}
            </button>
          );
        }
      } else {
        for (let i = 1; i <= Math.min(totalPages, maxPaginationItems); i++) {
          items.push(
            <button
              key={i}
              style={{background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 60}}
              className={`mx-1 px-3 py-1 rounded ${currentPage === i ? 'bg-gray-300 text-gray-500' : 'bg-primary-500 text-white'}`}
              onClick={() => paginate(i)}
            >
              {i}
            </button>
          );
        }
      }
  
      if (showDots && currentPage <= totalPages - Math.floor(maxPaginationItems / 2)) {
        items.push(
          <span key="dots-end" className="mx-1 px-3 py-1 rounded">
            ...
          </span>,
          <button
            key="end"
            style={{background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 60}}
            className={`mx-1 px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-500' : 'bg-primary-500 text-white'}`}
            onClick={() => paginate(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
  
      return items;
    };
  
    const handleFilter = () => {
      const discount = (document.getElementById("discount") as HTMLSelectElement).value;
      const category = (document.getElementById("category_filter") as HTMLSelectElement).value;
      const minPriceValue = (document.getElementById("minPrice") as HTMLInputElement).value;
      const maxPriceValue = (document.getElementById("maxPrice") as HTMLInputElement).value;
  
      setSelectedCategory(category);
      setDiscount(discount);
      setMinPrice(minPriceValue);
      setMaxPrice(maxPriceValue);
    
      let updatedProducts = [...products];
    
      updatedProducts = updatedProducts.filter((product) => {
        const categoryFilter = category === "Todos" || product.category === category;
        const discountFilter = discount === "none" || product.price > product.price * (1 - Number(discount) / 100);
        const minPriceFilter = minPriceValue === "" || product.price >= Number(minPriceValue);
        const maxPriceFilter = maxPriceValue === "" || product.price <= Number(maxPriceValue);
    
        return categoryFilter && discountFilter && minPriceFilter && maxPriceFilter;
      });
    
      setOriginalProducts(updatedProducts);
      setCurrentPage(1);
      alert("Filtros aplicados");
    };
  
      return (
        <section className="min-h-screen flex">
          <aside className="w-1/5 h-1/2 bg-gray-700 p-5 rounded shadow-md mt-auto mb-auto text-sm ml-3" style={{background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 60}}>
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
            <select id="category_filter" className="bg-gray-300 w-full p-2 mb-4 text-black rounded" >
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
            <button 
            className="w-full ml-6 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium text-sm px-5 py-3 text-center border-2 border-primary-600"
            style={{width: "80%", backgroundColor: "#9acd1b", borderRadius: 20}}
            onClick={() => {handleFilter()}}
            >
              Aplicar filtros
            </button>
          </aside>
    
          <main className="flex-1 p-6 bg-gray-700 rounded shadow-md mt-auto mb-auto text-sm ml-12 mr-12" style={{background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 60}}>
            {currentProducts.length > 0 ? (
              <div className="grid gap-1">
                {currentProducts.map((product, index) => (
                  <ProductCard key={index} product={{ ...product, id: String(product.id) }} />
                ))}
              </div>
            ) : (
              <>
                <p className="text-white flex items-center justify-center"><ExclamationIcon className="w-20 h-20" /></p>
                <p className="flex items-center justify-center text-white font-semibold">No hay productos disponibles con esta configuración. Intenta ajustar los parámetros.</p>
              </>
            )}
  
          <div className="mt-4 flex justify-center">
            {renderPaginationItems()}
          </div>
          </main>
        </section>
      );
    };
  
  export default ShowHome;