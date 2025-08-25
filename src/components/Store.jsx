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
  const [searchItem, setSearchItem] = useState("");

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

      const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row w-full gap-2">
  {/* FixedTop (on small screens only) */}
  <div className="md:hidden sticky top-0 w-full bg-black flex flex-col items-center justify-center p-2 z-50">

    <h1 className="text-2xl font-bold text-center tracking-wide font-playfair text-white">
      {category ? `Now Viewing: ${category}` : "Browse Products"}
    </h1>

    <FixedTop 
      cartCount={cartItems.length} 
      openModal={() => setIsCartOpen(true)}
      setSearchItem={setSearchItem}
    />
  </div>

  {/* Left side (80%) */}
  <div className="w-full md:w-[80%] h-full bg-gray-100 p-4 overflow-y-auto">

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(item => (
        <ProductCard
          key={item.id}
          store={item}
          handleClick={() => openPurchasePanel(item)}
          openPurchasePanel={openPurchasePanel}
        />
      )) 
    ) : (
    <div className="col-span-full flex justify-center items-center py-10">
      <p className="text-gray-400 text-lg">No products found</p>
    </div>
  )}
    </div>
  </div>

  {/* Right side (20%) – Desktop only */}
  <div className="hidden md:flex w-[20%] sticky top-0 h-screen flex-col gap-2">
    {/* Top */}
    <div className="h-[30%] bg-black flex items-center justify-center p-2 z-50">
      <FixedTop 
        cartCount={cartItems.length} 
        openModal={() => setIsCartOpen(true)}
        setSearchItem={setSearchItem}
      />
    </div>

    {/* Bottom (desktop details) */}
    <div className="h-[70%] bg-gray-100 flex flex-col items-center justify-start p-4 gap-4 overflow-y-auto w-full">
      {selectedProduct ? (
        <div className="w-full flex flex-col ">
          
            <div className="w-full flex justify-between items-center mb-2">
              <h2 className="font-bold text-lg">{selectedProduct.name}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-500 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="flex justify-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-[40%] rounded-lg mt-2"
              />
            </div>

          <span className="font-semibold text-amber-600 text-lg text-center">PURCHASE DETAILS</span>
          
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
  

  {/* Dark Overlay + Mobile Bottom Drawer */}
{selectedProduct && (
  <>
    {/* Dark Overlay */}
    <div
      className="fixed inset-0 bg-black/80 z-40 md:hidden"
      onClick={() => setSelectedProduct(null)} // closes if clicked outside
    ></div>

    {/* Drawer */}
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-2xl rounded-t-2xl p-4 z-50 md:hidden min-h-[70vh] overflow-y-auto animate-slideUp">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-xl">{selectedProduct.name}</h2>
        <button onClick={() => setSelectedProduct(null)} className="text-gray-500 font-bold">✕</button>
      </div>
      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        className="w-[40%] rounded-lg mx-auto"
      />

      <span className="font-semibold text-amber-600 text-lg block mt-2 text-center">PURCHASE DETAILS</span>
      
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
  </>
)}

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
