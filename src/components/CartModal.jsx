import React from "react";

const CartModal = ({ cartItems, setCartItems, closeModal }) => {
  // Increment item quantity
  const increment = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
  };

  // Decrement item quantity (remove if 0)
  const decrement = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1); // remove item when qty reaches 0
    }
    setCartItems(updatedCart);
  };

  // Calculate total price
  const total = cartItems.reduce((acc, item) => {
    const priceNum = Number(item.price.replace(/[^0-9]/g, ""));
    return acc + priceNum * item.quantity;
  }, 0);

  // Generate WhatsApp link
  const checkout = () => {
    if (cartItems.length === 0) return;
    let message = "Hello! I would like to order the following items:\n\n";
    cartItems.forEach((item) => {
      message += `${item.name} (${item.option}) x ${item.quantity} - ${item.price}\n`;
    });
    message += `\nTotal: ₦${total.toLocaleString()}`;
    const url = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed right-0 top-0 w-full md:w-[30vw] h-screen bg-gray-200 shadow-xl p-4 rounded-l-lg overflow-y-auto z-[60]">
       <div className="w-full overflow-y-auto relative">

      <button
        className="absolute top-0 right-4 text-red-500 font-bold text-lg"
        onClick={closeModal}
      >
        ✕
      </button>

      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-sm text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
  <div
    key={`${item.name}-${item.option}`}
    className="flex flex-row items-center text-center justify-between p-0 md:p-4 mb-6 border-b pb-4 w-full"
  >

    <div className="flex flex-col">
          <p className="text-md md:text-lg font-medium">{item.name}</p>
    <img
      src={item.image}
      alt={item.name}
      className="w-20 h-15 "
    />
    </div>

    <p className="text-sm text-gray-600">{item.option}</p>
    <p className="text-base font-semibold">{item.price}</p>

    <div className="flex items-center gap-2 mt-2">
      <button
        className="px-2 py-1 bg-gray-300 rounded text-lg"
        onClick={() => decrement(index)}
      >
        -
      </button>
      <span className="text-lg">{item.quantity}</span>
      <button
        className="px-2 py-1 bg-gray-300 rounded text-lg"
        onClick={() => increment(index)}
      >
        +
      </button>
    </div>
  </div>
))}

          {/* Total */}
          <div className="w-full border-t mt-4 pt-4 flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>₦{total.toLocaleString()}</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              className="flex-1 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition-all"
              onClick={closeModal}
            >
              Continue
            </button>
            <button
              className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all"
              onClick={checkout}
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
