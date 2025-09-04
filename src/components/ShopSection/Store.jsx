import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import FixedTop from "../ShopSection/FixedTop"; 
import ProductCard from "../ShopSection/ProductCard"; 
import CartModal from "../ShopSection/CartModal";

// Datasets
import { maleData } from "../../data/maleData";
import { femaleData } from "../../data/femaleData";
import { diffuserData } from "../../data/diffuserData";

const Store = ({ category }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVolume, setSelectedVolume] = useState(""); 
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  let products = [];
  if (category === "MEN") products = maleData;
  else if (category === "WOMEN") products = femaleData;
  else if (category === "DIFFUSER") products = diffuserData;

  const openPurchasePanel = (product) => {
    setSelectedProduct(product);
    setSelectedVolume("");
  };

const addToCart = () => {
  if (!selectedVolume) return;

  const index = selectedProduct.volumes.indexOf(selectedVolume);
  const price = `₦${selectedProduct.prices[index].toLocaleString()}`;

  const newItem = {
    cartId: uuidv4(), // unique per line
    name: selectedProduct.name,
    image: selectedProduct.image,
    option: selectedVolume,
    price,
    quantity: 1,
  };

  setCartItems((prev) => [...prev, newItem]);
  setSelectedVolume("");

  toast.success(`${selectedProduct.name} added to cart!`);
};

   const productOptions =
    selectedProduct?.volumes.map((vol, idx) => ({
      label: vol,
      price: `₦${selectedProduct.prices[idx].toLocaleString()}`,
    })) || [];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

useEffect(() => {
  const isMobile = window.innerWidth < 768; // Tailwind md breakpoint
  const isDrawerOpen = !!selectedProduct;
  const isCartOpenNow = !!isCartOpen;

  if ((isDrawerOpen || isCartOpenNow) && isMobile) {
    document.body.style.overflow = "hidden"; // lock scroll
  } else {
    document.body.style.overflow = ""; // restore scroll
  }

  const handleResize = () => {
    const stillMobile = window.innerWidth < 768;
    if ((isDrawerOpen || isCartOpenNow) && stillMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
    document.body.style.overflow = ""; // reset
  };
}, [selectedProduct, isCartOpen]);

useEffect(() => {
  if (isCartOpen) {
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverscroll = document.documentElement.style.overscrollBehavior;

    document.body.style.overflow = "hidden";            // lock background scroll
    document.documentElement.style.overscrollBehavior = "none"; // prevent scroll chaining on iOS

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overscrollBehavior = prevHtmlOverscroll;
    };
  }
}, [isCartOpen]);



  return (
    <div className="flex flex-col md:flex-row w-full gap-2">

      {/* FixedTop (on small screens only) */}
      <div className="md:hidden sticky top-0 w-full flex flex-col items-center justify-center p-2 z-50">

        <h1 className="text-2xl font-bold text-center tracking-wide font-playfair text-black dark:text-white">
          {category ? `Now Viewing: ${category}` : "Browse Products"}
        </h1>

        <FixedTop 
          cartCount={cartItems.length} 
          openModal={() => setIsCartOpen(true)}
          setSearchItem={setSearchItem}
        />
      </div>

  {/* Left side (80%) */}
  <div className="w-full md:w-[80%] h-full bg-gray-100 dark:bg-[#1c1818] p-4 overflow-y-auto">

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
      <p className="text-gray-400 dark:text-black text-lg">No products found</p>
    </div>
  )}
    </div>
  </div>

  {/* Right side (20%) – Desktop only */}
  <div className="hidden md:flex w-[20%] sticky top-0 h-screen flex-col gap-2">
    {/* Top */}
    <div className="flex items-center justify-center z-50 ">
      <FixedTop 
        cartCount={cartItems.length} 
        openModal={() => setIsCartOpen(true)}
        setSearchItem={setSearchItem}
      />
    </div>

    {/* Bottom (desktop details) */}
    <div className="bg-gray-100 dark:bg-[#1c1818] flex flex-col items-center justify-start p-4 overflow-y-auto w-full">    
      {selectedProduct ? (
        <div className="w-full flex flex-col ">
          
            <div className="w-full flex justify-between items-center mb-2">
              <h2 className="font-bold text-lg">{selectedProduct.name}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-500 font-bold hover:text-red-400"
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

            {productOptions.map(v => (
              <React.Fragment key={v.label}>
                <div
                  className={`col-span-2 grid grid-cols-2 gap-2 p-2 rounded cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 hover:dark:text-white transition-all ${
                    selectedVolume === v.label
                      ? "bg-[#d39c44] text-white"
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
                ? "bg-[#d39c44] text-white hover:bg-[#d39c44]/80"
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
      className="fixed inset-0 bg-black/80 dark:bg-white/20 z-40 md:hidden"
      onClick={() => setSelectedProduct(null)} // closes if clicked outside
    ></div>

    <Toaster position="top-center" reverseOrder={false} />
    
    {/* Drawer */}
    <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-black shadow-2xl rounded-t-2xl p-4 z-50 md:hidden min-h-[70vh] overflow-y-auto animate-slideUp">
        
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

        {productOptions.map(v => (
          <React.Fragment key={v.label}>
            <div
              className={`col-span-2 grid grid-cols-2 gap-2 p-2 rounded cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 hover:dark:text-white transition-all ${
                selectedVolume === v.label
                  ? "bg-[#d39c44] text-white"
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
            ? "bg-[#d39c44] text-white hover:bg-[#d39c44]/80"
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
