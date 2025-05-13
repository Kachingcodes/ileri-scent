import React from "react";

const CartModal = ({
  cart,
  storeData,
  removeFromCart,
  addToCart,
  closeModal,
  totalPrice,
  handlePlaceOrder,
}) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-200">
      <div className="bg-white dark:bg-blue-950 text-blue-900 dark:text-white rounded-2xl shadow-xl w-[95%] max-w-2xl p-6 overflow-y-auto max-h-[90vh] relative">
        <h1 className="text-2xl font-bold font-playfair text-center mb-4 text-yellow-600 tracking-wider">YOUR CART</h1>

        {Object.keys(cart).length === 0 ? (
          <p className="text-center text-sm text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-md font-semibold">Item</h2>
              <h2 className="text-md font-semibold">Quantity</h2>
            </div>

            {Object.keys(cart).map((id) => {
              const item = storeData.find(
                (product) => product.id === parseInt(id)
              );
              return item ? (
                <div
                  key={id}
                  className="flex flex-row justify-between items-center border-b py-4 gap-4 md:gap-20"
                >

                    <div className="flex-1">
                        <p className="font-semibold font-sura text-blue-950 dark:text-white">{item.name}</p>
                        <p className="text-sm text-yellow-700">{item.review}</p>
                        <p className="text-sm text-black font-news font-semibold">₦{item.price}</p>
                    </div>

                    <div className="overflow-hidden shadow-md/40 shadow-amber-800">
                        <img src={item.image} alt={item.name} className="w-20 h-full object-cover" />
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                        className="bg-gray-400 text-black w-7 h-7 rounded-full hover:bg-red-600 transition"
                        onClick={() => removeFromCart(item.id)}
                        >
                        –
                        </button>
                        <span>{cart[id]}</span>
                        <button
                        className="bg-green-900 text-white w-7 h-7 rounded-full hover:bg-green-600 transition"
                        onClick={() => addToCart(item.id)}
                        >
                        +
                        </button>
                    </div>
                </div>
              ) : null;
            })}

            <h3 className="text-lg font-bold font-news text-right text-blue-900 mt-6">
              Total: ₦{totalPrice}
            </h3>

            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
              <button
                className="w-full sm:w-auto font-sura bg-white border border-blue-900 text-blue-900 py-2 px-4 rounded-full hover:bg-blue-900 hover:text-white transition"
                onClick={closeModal}
              >
                Continue
              </button>
              <button
                className="w-full sm:w-auto font-sura bg-blue-900 text-white py-2 px-4 rounded-full hover:bg-yellow-500 hover:text-blue-900 transition"
                onClick={handlePlaceOrder}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;