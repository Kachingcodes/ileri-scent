import React, { useState, useEffect, useRef } from "react";
import { storeData } from "../data/storeData";
import CartModal from "./CartModal";
import PerfumeModal from "./PerfumeModal";
import ProductCard from "./ProductCard";

const Store = ({ isCartModalOpen, closeModal, openCartModal, searchItem }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = sessionStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : {};
    });

    const [selectedScent, setSelectedScent] = useState(null);
    const [isPerfumeModalOpen, setIsPerfumeModalOpen] = useState(false);
    const [message, setMessage] = useState("");

    const modalRef = useRef(null);

    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (id) => {
        setCart((prevCart) => ({
            ...prevCart,
            [id]: (prevCart[id] || 0) + 1,
        }));

        const item = storeData.find((product) => product.id === id);
        if (item) {
            setMessage(`${item.name} added to cart!`);
            setTimeout(() => setMessage(""), 2000);
        }
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[id] > 1) {
                updatedCart[id] -= 1;
            } else {
                delete updatedCart[id];
            }
            return updatedCart;
        });
    };

    const handleClick = (store) => {
        setSelectedScent(store);
        setIsPerfumeModalOpen(true);
    };

    const totalPrice = Object.keys(cart).reduce((total, id) => {
        const item = storeData.find((product) => product.id === Number(id));
        return total + (item ? item.price * cart[id] : 0);
    }, 0);

    const filteredItems = storeData.filter((item) =>
        item.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.review.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.price.toString().includes(searchItem)   
    );

    const handlePlaceOrder = () => {
        const phoneNum = "2348168250885";
        let message = "Order Summary \n\n"

        Object.keys(cart).forEach((id) => {
            const item = storeData.find((product) => product.id === Number(id));
            if(item) {
                const itemTotal = item.price * cart[id];
                message += ` ${item.name} - ${cart[id]} x ₦${item.price} = ₦${itemTotal}\n`;
            }
        });

        message += `\n *Total Price:* ₦${totalPrice}`;
        message += `\n\n *Please confirm my order!*`;
        
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNum}?text=${encodedMessage}`;
        window.open(url, "_blank");
    };

    useEffect(() => {
        if (isCartModalOpen || isPerfumeModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isCartModalOpen, isPerfumeModalOpen]); 

    return (
        <div className="w-full relative min-h-screen bg-gray-100 p-2 md:p-8 overflow-hidden">
            {message && 
                <div className="fixed top-46 md:top-80 right-14 md:right-180 bg-green-600 text-md text-white px-2 py-2 rounded-lg shadow-md transition-opacity duration-300 z-5000">
                    {message}
                </div>
            }

            <div className="px-2 md:px-6 py-4">
                <div className="gap-4 p-0 md:p-4 grid grid-cols-2 
                            sm:grid-cols-2 
                            md:grid-cols-4 
                            lg:grid-cols-7
                            mt-32 md:mt-18">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((store) => (
                            <ProductCard 
                                key={store.id} 
                                store={store} 
                                handleClick={handleClick} 
                                addToCart={addToCart} 
                            />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">No results found</p>
                    )}
                </div>
            </div>

            {isPerfumeModalOpen && (
                <PerfumeModal 
                    selectedScent={selectedScent} 
                    setIsPerfumeModalOpen={setIsPerfumeModalOpen} 
                    addToCart={addToCart} 
                />
            )}

            {isCartModalOpen && (
                <CartModal 
                    cart={cart}
                    storeData={storeData}
                    removeFromCart={removeFromCart}
                    addToCart={addToCart}
                    closeModal={closeModal}
                    totalPrice={totalPrice}
                    handlePlaceOrder={handlePlaceOrder}
                />
            )}
        </div>
    );
};

export default Store;
