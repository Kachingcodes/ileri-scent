import React, { useState } from 'react'; 
import Store from './Store';
import Intro from './Intro';
import FixedTop from './FixedTop';
import Categories from './Categories';
import Footer from './Footer';


const Shop = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  return (
    

    <div className="flex flex-col w-full">
      <Intro/>
      <FixedTop openModal={() => setIsCartModalOpen(true)}  setSearchItem={setSearchItem}/> 
      <Store isCartModalOpen={isCartModalOpen} closeModal={() => setIsCartModalOpen(false)} searchItem={searchItem}/> 
      <Categories/>        
      <Footer/>
    </div>    
    
  );
};

export default Shop;
