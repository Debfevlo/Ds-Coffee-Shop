import React from 'react';
import Logo from '../../assets/images/coffee_logo.png';
import { FaCoffee } from 'react-icons/fa';
import bgImage from '../../assets/images/barista.jpg'


const BackgroundImg ={
  backgroundImage:`url(${bgImage})`,
  backgroundSize:'cover',
  backgroundPosition:'center',
  width:'100%',
  height:'450px'

}

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Service',
    link: '/#service',
  },
  {
    id: 3,
    name: 'About',
    link: '/#about',
  },
  {
    id: 4,
    name: 'Contact', // Changed the duplicate 'About' to 'Contact'
    link: '/#contact',
  },
];

const Navbar = () => {
  return (
    <>
    <span id='/'></span>
    <div style={BackgroundImg}>
      <div className="container flex justify-between items-center hover:bg-secondary/70">
        {/* Logo section */}
        <div className='font-bold flex justify-start items-center gap-2'>
          <a href="#" className='flex justify-center items-center sm:text-2xl text-primary'>
            <img src={Logo} alt="Logo" className='w-16' />
            COFFEE
          </a>
        </div>

        {/* Menu-links section */}
        <div className='flex-grow flex justify-center'>
          <ul className='hidden sm:flex items-center gap-5 '>
            {
              Menu.map((menu, index) => (
                <li key={index}>
                  <a href={menu.link} className='inline-block text-white text-xl hover:text-black'>{menu.name}</a>
                </li>
              ))
            }
          </ul>
        </div>

        {/* Button section */}
        <div className='flex justify-end items-center'>
          <button className='px-4 py-2 bg-primary/80 rounded-full hover:scale-105 text-white duration-200 flex justify-center items-center gap-2'>
            Order
            <FaCoffee className='text-xl cursor-pointer' />
          </button>
        </div>
      </div>
      <div className='text-left ml-5 mt-60   md:mt-52 text-white md:ml-20'>  
        <h1 className='text-sm  md:text-4xl mb-2 '> We serve the richest <span>coffee <br /> in the City!</span></h1>

        <button className='bg-primary rounded-full px-2 py-2'>Coffee and Work</button>
      </div>
      
    </div>
    </>
  );
}

export default Navbar;
