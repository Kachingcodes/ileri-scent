import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const CartModal = ({ cartItems, setCartItems, closeModal }) => {
  const increment = (index) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    setCartItems(updated);
  };

  const decrement = (index) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) updated[index].quantity -= 1;
    else updated.splice(index, 1);
    setCartItems(updated);
  };

  const total = cartItems.reduce((acc, item) => {
    const priceNum = Number(item.price.replace(/[^0-9]/g, ""));
    return acc + priceNum * item.quantity;
  }, 0);

  const checkout = () => {
    if (!cartItems.length) return;
    let message = "Hello! I would like to order the following items:\n\n";
    cartItems.forEach((item) => {
      message += `${item.name} (${item.option}) x ${item.quantity} - ${item.price}\n`;
    });
    message += `\nTotal: ₦${total.toLocaleString()}`;
    const url = `https://wa.me/2348168250885?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Overlay blocks background interactions + scroll chain */}
      <div
        className="fixed inset-0 bg-black/40 z-[59] overscroll-none"
        onClick={closeModal}
      />

      <div className="fixed right-0 top-20 w-full md:w-[30vw] h-screen bg-gray-200 dark:bg-black shadow-xl rounded-l-lg z-[60] flex flex-col">
        {/* Header - Does not Scroll*/}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-2xl font-semibold">Your Cart</h2>
          <button className="text-red-500 font-bold text-lg" onClick={closeModal}>✕</button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-2">
          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-500">Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={`${item.name}-${item.option}`}
                className="flex items-center justify-between p-2 mb-2 border-b pb-4 w-full"
              >
                <div className="flex flex-col">
                  <p className="text-md md:text-lg font-medium">{item.name}</p>
                  <img src={item.image} alt={item.name} className="w-20 h-15" />
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300">{item.option}</p>
                <p className="text-base font-semibold">{item.price}</p>

                <div className="flex items-center gap-2 mt-2">
                  <button className="px-2 py-1 bg-gray-300 rounded text-lg" onClick={() => decrement(index)}>-</button>
                  <span className="text-lg">{item.quantity}</span>
                  <button className="px-2 py-1 bg-gray-300 rounded text-lg" onClick={() => increment(index)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer - Does not scroll */}
        {cartItems.length > 0 && (
          <div className="p-2 border-t mb-24">
            <div className="w-full flex justify-between text-lg font-semibold mb-4">
              <span>Total:</span>
              <span>₦{total.toLocaleString()}</span>
            </div>
            <div className="flex gap-4 p-3 mb-5">
              <button className="flex-1 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500" onClick={closeModal}>
                Continue
              </button>
              <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" onClick={checkout}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartModal;
