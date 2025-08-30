import React, { useRef } from "react";
import "./App.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Analytics } from "@vercel/analytics/react";
import Body from "./components/HomeSection/Body";
import Wanted from "./components/HomeSection/Wanted";
import Popular from "./components/HomeSection/Popular";
import Works from "./components/HomeSection/Works";
import About from "./components/HomeSection/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reviews from "./components/Reviews";
import Shop from './components/ShopSection/Shop'

function App() {


  return (
    <Router>
      
      <Analytics />
      
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Body/>
              <Wanted />
              <Popular/>
              <Works />
              <About />
              <Footer />  
              
            </div>
          }
        />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/shop" element={<Shop />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
