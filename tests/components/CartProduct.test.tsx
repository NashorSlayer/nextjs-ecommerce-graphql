import React from 'react';
import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import CartProduct from '../../components/CartProduct';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

jest.mock('../../redux/hooks', () => ({
  useAppDispatch: jest.fn(),
}));

describe('CartProduct component', () => {
  const product = {
    id: '1',
    name: 'Product 1',
    price: 10,
    stock: 10,
    category: "Example Category",
    description: "Example Description",
    image: "no-image.jpg",
  };

  const quantity = 2;

  const mockCartProducts = [
    { product: { id: '1', name: 'Product 1', price: 10 }, quantity: 2 },
    { product: { id: '2', name: 'Product 2', price: 15 }, quantity: 1 },
  ];

  test('renders CartProduct component correctly', () => {
    render(
        <Provider store={configureStore({ reducer: { cart: () => mockCartProducts } })}>   
            <table>
                <tbody>
                    <CartProduct product={product} quantity={quantity} />
                </tbody>
            </table>
        </Provider>);
        
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('$20')).toBeInTheDocument();
  });
});