import React from 'react';
import { render, fireEvent, queryByText } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CartDetailsPopup from '../../components/CartDetailsPopup';
import { ProductCardProps, selectCart } from '../../redux/cartSlice';
import '@testing-library/jest-dom';

// Mocking the selectCart selector
jest.mock('../../redux/cartSlice', () => ({
  ...jest.requireActual('../../redux/cartSlice'),
  selectCart: jest.fn(),
}));

// Sample cart products data
const mockCartProducts = [
  { product: { id: '1', name: 'Product 1', price: 10 }, quantity: 2 },
  { product: { id: '2', name: 'Product 2', price: 15 }, quantity: 1 },
];

describe('CartDetailsPopup Component', () => {
  it('renders cart details correctly with products', () => {
    (selectCart as jest.Mock).mockReturnValue(mockCartProducts);

    const { getByText, queryByText } = render(
      <Provider store={configureStore({ reducer: { cart: () => mockCartProducts } })}>
        <CartDetailsPopup onClose={() => {}} />
      </Provider>
    );

    expect(getByText('DETALLES DEL CARRITO')).toBeInTheDocument();
    expect(getByText('Product 1 x 2')).toBeInTheDocument();
    expect(getByText('Product 2 x 1')).toBeInTheDocument();
    expect(getByText('TOTAL: $35')).toBeInTheDocument();
    expect(queryByText('No hay productos en el carrito')).toBeNull();
  });
  it('renders "No hay productos en el carrito" when cart is empty', () => {
    // Mock an empty cart
    const mockEmptyCart: ProductCardProps[] = [];
    // Mock the Redux selector to return an empty cart
    jest.spyOn(require('../../redux/hooks'), 'useAppSelector').mockReturnValue(mockEmptyCart);

    const { getByText } = render(<CartDetailsPopup onClose={() => {}} />);

    // Assert that the component renders the message for an empty cart
    const emptyCartMessage = getByText('No hay productos en el carrito');
    expect(emptyCartMessage).toBeInTheDocument();
  });
  it('calls onClose when the "Cerrar detalles" button is clicked', () => {
    const onCloseMock = jest.fn();

    const { getByText } = render(
      <Provider store={configureStore({ reducer: { cart: () => [] } })}>
        <CartDetailsPopup onClose={onCloseMock} />
      </Provider>
    );

    fireEvent.click(getByText('Cerrar detalles'));

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('navigates to /cart when the "Ir al carrito" button is clicked', () => {
    const { getByText } = render(
      <Provider store={configureStore({ reducer: { cart: () => [] } })}>
        <CartDetailsPopup onClose={() => {}} />
      </Provider>
    );

    fireEvent.click(getByText('Ir al carrito'));

    // Add assertions for the navigation logic based on your routing setup
  });
});
