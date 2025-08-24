import React, { useState } from "react";
import FixedTop from "./FixedTop"; 
import ProductCard from "./ProductCard"; 
import CartModal from "./CartModal";

// Import your datasets
import { maleData } from "../data/maleData";
import { femaleData } from "../data/femaleData";
import { unisexData } from "../data/unisexData";
import { storeData } from "../data/storeData";

const Store = ({ category }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVolume, setSelectedVolume] = useState(""); 
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  let products = [];
  if (category === "MEN") products = maleData;
  else if (category === "WOMEN") products = femaleData;
  else if (category === "UNISEX") products = unisexData;
  else if (category === "DIFFUSER") products = storeData;

  const openPurchasePanel = (product) => {
    setSelectedProduct(product);
    setSelectedVolume("");
  };

  const addToCart = () => {
    if (!selectedVolume) return;

    const price = selectedVolume === "15ml" ? "₦10,000" :
                  selectedVolume === "30ml" ? "₦15,000" :
                  "₦30,000";

    const newItem = {
      name: selectedProduct.name,
      image: selectedProduct.image,
      option: selectedVolume,
      price,
      quantity: 1
    };

    setCartItems(prev => [...prev, newItem]);
    setSelectedVolume("");
  };

  const volumes = [
    { label: "15ml", price: "₦10,000" },
    { label: "30ml", price: "₦15,000" },
    { label: "50ml", price: "₦30,000" },
  ];

  return (
    <div className="flex w-full gap-2">
      {/* Left side (80%) */}
      <div className="w-[80%] h-full bg-gray-100 p-4 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(item => (
            <ProductCard
              key={item.id}
              store={item}
              handleClick={() => openPurchasePanel(item)}
              openPurchasePanel={openPurchasePanel}
            />
          ))}
        </div>
      </div>

      {/* Right side (20%) */}
      <div className="w-[20%] sticky top-0 h-screen flex flex-col gap-2">
        {/* Top */}
        <div className="h-[30%] bg-black flex items-center justify-center p-2 z-50">
          <FixedTop 
            cartCount={cartItems.length} 
            openModal={() => setIsCartOpen(true)}
          />
        </div>

        {/* Bottom */}
        <div className="h-[70%] bg-gray-100 flex flex-col items-center justify-start p-4 gap-4 overflow-y-auto w-full">
          {selectedProduct ? (
            <div className="w-full flex flex-col items-center">
              <h2 className="font-bold text-lg text-center">{selectedProduct.name}</h2>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-[40%] rounded-lg mt-2"
              />
                  
                <span className="font-semibold text-amber-600 text-lg">PURCHASE DETAILS</span>
              {/* Volume/Price grid */}
              <div className="grid grid-cols-2 gap-2 w-full mt-2 text-center">
                <span className="font-semibold">Volume</span>
                <span className="font-semibold">Price</span>

                {volumes.map(v => (
                  <React.Fragment key={v.label}>
                    <div
                      className={`col-span-2 grid grid-cols-2 gap-2 p-2 rounded cursor-pointer hover:bg-gray-300 transition-all ${
                        selectedVolume === v.label
                          ? "bg-blue-700 text-white"
                          : "bg-gray-200 text-black"
                      }`}
                      onClick={() => setSelectedVolume(v.label)}
                    >
                      <span className="font-medium">{v.label}</span>
                      <span>{v.price}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* Add to Cart */}
              <button
                className={`mt-4 px-4 py-2 rounded-lg transition-all w-full ${
                  selectedVolume
                    ? "bg-blue-700 text-white hover:bg-blue-800"
                    : "bg-gray-400 text-gray-700 cursor-not-allowed"
                }`}
                onClick={addToCart}
                disabled={!selectedVolume}
              >
                Add to Cart
              </button>
            </div>
          ) : (
            <p className="text-sm font-bold">Select a product to see details</p>
          )}
        </div>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          setCartItems={setCartItems}
          closeModal={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
};

export default Store;
