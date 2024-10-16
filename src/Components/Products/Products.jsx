import React from 'react';
import { GiCoffeeCup } from 'react-icons/gi';
import { SiCoffeescript } from "react-icons/si";
import { CiCoffeeCup } from "react-icons/ci";
import { GiCakeSlice } from "react-icons/gi";


const Products = () => {
  return (
    <div>
        <div className='container'>
        <div className='flex justify-center items-center space-x-10 md:space-x-20  mt-5 md:p-5 text-primary'>
                <GiCoffeeCup className='w-8 h-8 md:w-16 md:h-12'/>
                <SiCoffeescript className='w-8 h-8 md:w-16 md:h-12' />
                <CiCoffeeCup className='w-8 h-8 md:w-16 md:h-12'/>
                <GiCakeSlice className='w-8 h-8 md:w-16 md:h-12'/>
            </div>
        </div>
    </div>
  )
}

export default Products