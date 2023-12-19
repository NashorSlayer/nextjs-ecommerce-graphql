import React from 'react';

interface Product {
    id: number;
    name: string;
    category: string;
    stock: number;
    price: number;
    image: string;
    description: string;
};

interface ProductDetailsPopupProps {
    product: Product;
    onClose: () => void;
}

const ProductDetailsPopup: React.FC<ProductDetailsPopupProps> = ({ product, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md max-w-md overflow-y-auto text-xl"style={{background: "#353734", borderColor: "#9acd1b", borderWidth: 5, borderRadius: 60}}>
            <div className="flex flex-col items-center ">
                <img src={product.image} alt={product.name} className="w-20 h-20 mb-2" />
                <span className="font-bold text-white mb-4">{product.name}</span>
            </div>
            <p><span className="font-semibold">Categoría:</span> <p className='text-white'>{product.category}</p></p>
            <p><span className="font-semibold">Stock:</span> <p className='text-white'>{product.stock}</p></p>
            <p><span className="font-semibold">Precio:</span> <p className='text-white'>${product.price}</p></p>
            <p><span className="font-semibold">Descripción:</span> <p className='text-white'>{product.description}</p></p>
            <div className="mt-4 flex items-center justify-center">
              <button   
                onClick={onClose}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                style={{width: "80%", backgroundColor: "#9acd1b", borderRadius: 20}}
              >
                Cerrar detalles
              </button>
            </div>
          </div>
        </div>
      );
};

export default ProductDetailsPopup;