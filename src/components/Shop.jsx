import React, { useState } from 'react'; 
import Intro from './Intro';
import Categories from './Categories';
import Footer from './Footer';

const Shop = () => {


  return (
    <div className="flex flex-col w-full">
      <Intro/>
      <Categories/>
      <Footer/>
    </div>    
  );
};

export default Shop;