import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { MdAddShoppingCart, MdOutlineReviews } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";



const FixedTop = ({ openModal, setSearchItem }) => {

    const navigate = useNavigate();
    const[input, setInput] = useState("");

    const handleSearch = (e) => {
        setInput(e.target.value);
        setSearchItem(e.target.value.toLowerCase());
    };

    const goToHome = () => {
        navigate("/");
        setIsMenuOpen(false);
      };

    const goToReviews = () => {
        navigate("/reviews");
        setIsMenuOpen(false);
      };

    return (
        <div className="w-full fixed z-100 bg-black text-white top-0 md:top-0 p-4 md:p-6">

            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="md:flex gap-2 p-1 md:ml-2 hidden">
                    <img className="w-6 h-10 md:w-9 md:h-14" src={logo}/>
                    <p className="flex items-end font-great text-md md:text-xl">Ileri Scent</p>
                </div>

                <div className="flex flex-col gap-2 text-center md:ml-14">
                    <h1 className="text-lg md:text-2xl font-playfair">Shop from our ready-made choices</h1>
                    <p className="text-xs text-amber-400">(Disclaimer: Bottles may be different from the images on the site)</p>
                </div>
                
                <div className="flex flex-row md:flex-col items-center justify-end gap-3">

                    <div className="flex w-50 md:w-62 h-8 items-center gap-2 border border-amber-400 rounded-full 
                        px-4 py-2 bg-white/8 shadow-sm focus-within:ring-1 focus-within:ring-yellow-200 transition-all">
                        <IoSearchSharp className="text-gray-300 text-xl" />
                        <input
                            type="text"
                            placeholder="Search by name, volume, or price"
                            value={input}
                            onChange={handleSearch}
                            className="w-full outline-none bg-transparent text-sm text-white placeholder-gray-400"
                        />
                    </div>

                    <div className="flex flex-row gap-2 md:gap-9">
                    
                    <FaHome className="text-xl md:text-2xl"
                        onClick={goToHome} />
                    
                    <MdAddShoppingCart className="text-xl md:text-2xl"
                    onClick={openModal}/>
                    
                    <MdOutlineReviews className="text-xl md:text-2xl"
                    onClick={goToReviews} /> 
            
                    </div>
                    
                </div>
            </div>
            
        </div>

    );
};

export default FixedTop;