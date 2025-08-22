import React, { useState } from 'react'; 
import Store from './Store';
import Intro from './Intro';
import FixedTop from './FixedTop';
import Footer from './Footer';

const Shop = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [cartCount, setCartCount] = useState(0); // NEW state for cart count

  return (
    <div className="flex flex-col w-full">
      <Intro/>
      <FixedTop 
        openModal={() => setIsCartModalOpen(true)}  
        setSearchItem={setSearchItem}
        cartCount={cartCount} // pass down cart count
      /> 
      <Store 
        isCartModalOpen={isCartModalOpen} 
        closeModal={() => setIsCartModalOpen(false)} 
        searchItem={searchItem}
        setCartCount={setCartCount} // pass setter so products can update cart
      /> 
      <Footer/>
    </div>    
  );
};

export default Shop;