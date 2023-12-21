
"use client"
import { FilterIcon, RefreshIcon, ExclamationIcon } from "@heroicons/react/solid";
import ProductCard from './ProductCard';
import { useEffect, useState } from "react";
import React from "react";
import { GetProducts } from "@/graphql/query";
import { useMutation, useQuery } from "@apollo/client";
import { ProductState, UpdateProduct } from "@/redux/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { confirmTransaction } from "@/graphql/mutation";

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

];


const ShowHome = () => {
  const productsPerPage = 4;
  const maxPaginationItems = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [mutateConfirmPayment] = useMutation(confirmTransaction);

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


  const token_ws = localStorage.getItem('token_ws')!;
  useEffect(() => {
    if (token_ws !== '') {
      const confirmPayment = async () => {
        const response = await mutateConfirmPayment({
          variables: {
            ws_token: token_ws
          }
        });
        console.log(response.data.confirmPayment.response_code);
        if (response.data.confirmPayment.response_code === 0) {
          alert("Pago Confirmado");
        } else if (response.data.confirmPayment.response_code === -1) {
          alert("Pago Rechazado")
        }
      }
      confirmPayment();
    }
  }, []);


  const dispatch = useAppDispatch();
  const productState = useAppSelector((state) => state.products);
  const { data, loading, error } = useQuery(GetProducts);


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const showDots = totalPages > maxPaginationItems;

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
      <aside className="w-1/5 h-1/2 bg-gray-700 p-5 rounded shadow-md mt-auto mb-auto text-sm ml-3" style={{ background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 60 }}>
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
          <input type="number" id="minPrice" placeholder="Min" className="bg-gray-300 w-1/2 p-2 mr-2 text-black rounded" min="0" />
          <span className="text-white" style={{ lineHeight: '2.2' }}>-</span>
          <input type="number" id="maxPrice" placeholder="Max" className="bg-gray-300 w-1/2 p-2 ml-2 text-black rounded" min="0" />
        </div>
        <button
          className="w-full ml-6 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium text-sm px-5 py-3 text-center border-2 border-primary-600"
          style={{ width: "80%", backgroundColor: "#9acd1b", borderRadius: 20 }}
          onClick={() => (handleFilter())}
        >
          Aplicar filtros
        </button>
      </aside>

      <main className="flex-1 p-6 bg-gray-700 rounded shadow-md mt-auto mb-auto text-sm ml-12 mr-12" style={{ background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 60 }}>
        {loading ? (
          <>
            <p className="text-white flex items-center justify-center"><ExclamationIcon className="w-20 h-20" /></p>
            <p className="flex items-center justify-center text-white font-semibold">No hay productos disponibles con esta configuración. Intenta ajustar los parámetros.</p>
          </>
        ) : (
          (data.getProducts).map((product: ProductState, index: React.Key | null | undefined) => {
            dispatch(UpdateProduct(product));
            return (
              <div className="grid gap-1" key={index}>
                <ProductCard
                  product={{ ...product, id: String(product.id) }}
                />
              </div>
            );
          })
        )}
      </main>
    </section>
  );
};

export default ShowHome;