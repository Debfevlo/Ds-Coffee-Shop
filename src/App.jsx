import React, {useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Products from './Components/Products/Products';
import Banner from './Components/Banner/Banner';
import Testimonials from './Components/Testimonials/Testimonials';
import Discount from './Components/Discount/Discount';
import Footer from './Components/Footer/Footer';


const App = () => {
  useEffect(()=>{
    AOS.init(
      {
        offset:100,
        duration:700,
        easing:'ease-in',
        delay:100,
      }
    )
  }, [])
  
  return (
    <div className='overflow-x-hidden bg-background' >
      <Navbar/>
      <Products/>
      <Services/>
      <Banner/>
      <Testimonials/>
      <Discount/>
      <Footer/>
    </div>
  )
}

export default App