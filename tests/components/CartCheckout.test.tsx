import React from 'react';
import { render } from '@testing-library/react';
import CartCheckout from '../../components/CartCheckout';;
import '@testing-library/jest-dom';

const mockProduct = {
    id: '1',
    name: 'Example Product',
    price: 10,
    stock: 10,
    category: "Example Category",
    description: "Example Description",
    image: "no-image.jpg",
};

const mockProps = {
  product: mockProduct,
  quantity: 2,
};

describe('CartCheckout Component', () => {
  it('renders product information correctly', () => {
    const { getByText } = render(
    <table>
      <tbody>
        <CartCheckout {...mockProps} />
      </tbody>
    </table>);

    // Verifica que el nombre del producto esté presente
    const productNameElement = getByText(mockProduct.name);
    expect(productNameElement).toBeInTheDocument();

    // Verifica que la cantidad esté presente
    const quantityElement = getByText(mockProps.quantity.toString());
    expect(quantityElement).toBeInTheDocument();

    // Verifica que el precio total esté presente
    const totalPriceElement = getByText(`$${mockProduct.price * mockProps.quantity}`);
    expect(totalPriceElement).toBeInTheDocument();
  });
});