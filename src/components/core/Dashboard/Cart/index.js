import React from 'react';
import { useSelector } from 'react-redux';
import RenderCartAmount from './RenderCartAmount';
import RenderCartCourse from './RenderCartCourse';

export const Cart = () => {
  const { total, totalItems } = useSelector((state) => state.cart);

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <p className="text-lg mb-6">{totalItems} items in your cart</p>
      {totalItems > 0 ? (
        <div>
          <RenderCartCourse />
          <RenderCartAmount />
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl">Your cart is empty!!!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
