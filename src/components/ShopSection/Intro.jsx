import React, { useState } from 'react';
import ShopHeader from '../ShopSection/ShopHeader';
import '../ShopSection/Intro.css';
import intro_right from '../../img/bottles/intro_right.jpg';
import intro_right2 from '../../img/bottles/intro_right2.jpg';
import intro_right3 from '../../img/bottles/intro_right3.jpg';
import intro_right4 from '../../img/bottles/intro_right4.jpg';
import intro_right5 from '../../img/bottles/intro_right5.jpg';
import intro_right6 from '../../img/bottles/intro_right6.jpg';
import intro_right7 from '../../img/bottles/intro_right7.jpg';
import intro_right8 from '../../img/bottles/intro_right8.jpg';
import intro_right9 from '../../img/bottles/intro_right9.jpg';
import black from "../../img/bottles/black2.png";


const Intro = () => {
  const [pauseFirst, setPauseFirst] = useState(false);
  const [pauseSecond, setPauseSecond] = useState(false);

  return (
    <div className="relative w-full overflow-hidden z-500">
      
      <div className=''>
        <ShopHeader/>
      </div>

      <div className='flex bg-[white] flex-row items-center justify-evenly h-[700px] md:h-[720px] overflow-hidden'>

        {/* Left scroll up */}
        <div className='w-[35%] h-full overflow-hidden flex-1/3'>

          <div className={`slide-track-first flex flex-col items-center ${pauseFirst ? 'slide-paused' : ''}`}
            onMouseEnter={() => setPauseFirst(true)}
            onMouseLeave={() => setPauseFirst(false)}
            onTouchStart={() => setPauseFirst(true)}
            onTouchEnd={() =>{ 
              setTimeout(() => setPauseFirst(false), 5000);
            }}
          >
            {[intro_right2, intro_right3, intro_right7, intro_right9, intro_right4].map((img, idx) => (
              <React.Fragment key={idx}>
                <img src={img} alt='' className='w-full'/>
              </React.Fragment>
            ))}  
          </div>
        </div>

        {/* Center Text */}
        <div className='w-[30%] flex-1/3 space-y-4 bg-gradient-to-br from-[#a3b8f8] via-[#a98dbb] to-[#d4af37] h-full flex flex-col items-center justify-center'>
          <h1 className='text-black text-lg md:text-5xl font-playfair font-extrabold tracking-widest'>
            WELCOME
          </h1>
          <h1 className='text-black text-lg md:text-4xl font-playfair font-extrabold tracking-widest'>
            &
          </h1>
          <h1 className='text-black text-lg md:text-5xl font-playfair font-extrabold tracking-widest text-center'>
            HAPPY SHOPPING
          </h1>
        </div>

        {/* Right scroll down */}
        <div className='w-[35%] flex-1/3 h-full overflow-hidden'>
          <div className={`slide-track-second flex flex-col items-center ${pauseSecond ? 'slide-paused' : ''}`}
              onMouseEnter={() => setPauseSecond(true)}
              onMouseLeave={() => setPauseSecond(false)}
              onTouchStart={() => setPauseSecond(true)}
              onTouchEnd={() => {
                setTimeout(() => setPauseSecond(false), 5000);
              }}
            >
              {[intro_right, intro_right5, intro_right6, intro_right8, black].map((img, idx) => (
                <React.Fragment key={idx}>
                  <img src={img} alt='' className='w-full'/>
                </React.Fragment>
              ))}  
            </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
