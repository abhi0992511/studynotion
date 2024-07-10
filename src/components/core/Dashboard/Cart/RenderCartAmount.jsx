import React from "react";
import { useSelector } from "react-redux";

const RenderCartAmount = () => {
  const { total, cart } = useSelector((state) => state.cart);

  const handleBuyCourse = () => {
    try {
      const courseIds = cart.map((course) => course._id);
      console.log("Buying Course", courseIds);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Total</h1>
      <p className="text-lg text-gray-600 mb-6">Rs: {total}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white text-lg rounded hover:bg-blue-600 transition duration-300"
        onClick={handleBuyCourse}
      >
        BUY NOW
      </button>
    </div>
  );
};

export default RenderCartAmount;
