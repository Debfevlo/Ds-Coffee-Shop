import React from 'react'
import BannerImg from '../../assets/images/coffee-texture.jpg';
import { GrSecure } from 'react-icons/gr';
import {IoFastFood} from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const bgImage={
    backgroundImage:`url(${BannerImg})`,
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    height:'100%',
    width:'100%',
};

const Banner = () => {
  return (
    <>
    <span id='about'></span>
    <div style={bgImage} className='text-center py-10'>
        <div  className="container min-h-[300px]">
            <div className='flex flex-col justify-center gap-1 p-8 z-10'>
                <h1 className='text-2xl font-bold '>
                Premium Blend Coffee
            </h1>

            <p className='text-sm text-gray-500 tracking-wide leading-5'>
                Premium coffee is crafted from the finest beans, delivering a rich, smooth flavor and an aromatic experience. Each cup is a blend of quality and passion, made to satisfy even the most discerning coffee lovers. 
            </p>

           <div className="flex flex-col md:flex-row justify-center items-center mt-7 space-y-5 md:space-y-0">
  {/* Left section with icons and text */}
  <div className="flex flex-col items-center space-y-5">
    <div className="flex items-center gap-3">
      <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
      <span className="whitespace-nowrap text-[15px] md:text-base">Fine Coffee</span>
    </div>
    <div className="flex items-center gap-3">
      <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100" />
      <span className="whitespace-nowrap text-[15px] md:text-base">Hot Coffee</span>
    </div>
    <div className="flex items-center gap-3">
      <GiFoodTruck className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
      <span className="whitespace-nowrap text-[15px] md:text-base">Cold Coffee</span>
    </div>
  </div>

  {/* Border and text section */}
  <div className="flex flex-col items-start md:items-start border-l-2 border-primary/50 pl-4 md:border-l-4 md:pl-6 space-y-1 md:space-y-3">
    <h1 className="text-[15px] font-semibold text-center md:text-left sm:text-xl md:text-2xl">Coffee Lover</h1>
    <p className="text-[12px] sm:text-sm md:text-base text-center md:text-left leading-relaxed">
      Much like writing code, brewing the perfect cup of coffee requires patience and a dash of passion to create a comforting blend of flavor.
    </p>
  </div>
</div>

            </div>
            
        </div>
    </div>
    </>
  )
}

export default Banner