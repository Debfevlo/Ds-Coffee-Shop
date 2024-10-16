import React from 'react';
import Slider from 'react-slick';
import Img1 from '../../assets/images/coffee-cup.jpg';
import Img2 from '../../assets/images/coffee-cup1.jpg';
import Img3 from '../../assets/images/coffee-cup2.jpg';
import Img4 from '../../assets/images/coffee-cup3.jpg';
import Img5 from '../../assets/images/dessert1.jpg';
import Img6 from '../../assets/images/desserts2.jpg';
import Img7 from '../../assets/images/dessert3.jpg';
import Img8 from '../../assets/images/dessert4.jpg';
import Img9 from '../../assets/images/donut.jpg';
import Img10 from '../../assets/images/piecake.jpg';
import Img11 from '../../assets/images/smoothies.jpg';
import Img12 from '../../assets/images/icetea.jpg';
import Img13 from '../../assets/images/tea.jpg';
import Img14 from '../../assets/images/cuptea.jpg';

const Service = [
  { id: 1, img: Img1, name: 'Cappuccino', description: 'Creamy, foamy, nice blend.', price: '$8', button: 'Order Now' },
  { id: 2, img: Img2, name: 'Americano', description: 'Bold, diluted, classic taste.', price: '$10', button: 'Order Now' },
  { id: 3, img: Img3, name: 'Latte', description: 'Smooth, mild, milky delight.', price: '$7', button: 'Order Now' },
  { id: 4, img: Img4, name: 'Espresso', description: 'Rich, bold, thick shot.', price: '$13', button: 'Order Now' },
  { id: 12, img: Img12, name: 'Ice Tea', description: 'Rich, bold, thick shot.', price: '$13', button: 'Order Now' },
  { id: 13, img: Img13, name: 'Cup Tea', description: 'Rich, bold, thick shot.', price: '$13', button: 'Order Now' },
  { id: 14, img: Img14, name: 'Tea', description: 'Rich, bold, thick shot.', price: '$13', button: 'Order Now' },
];

const Dessert = [
  { id: 5, img: Img5, name: 'Donut', description: 'Sweet, fluffy delight.', price: '$10', button: 'Order Now' },
  { id:9, img: Img9, name: 'Donut', description: 'Sweet, fluffy delight.', price: '$10', button: 'Order Now' },
  { id: 10, img: Img10, name: 'Cup-Cake', description: 'Soft frosted bliss.', price: '$12', button: 'Order Now' },
  { id: 11, img: Img11, name: 'Smoothie', description: 'Crisp, buttery treat.', price: '$9', button: 'Order Now' },
  { id: 8, img: Img8, name: 'Brown Sweet', description: 'Rich, caramel goodness.', price: '$15', button: 'Order Now' },
  { id: 6, img: Img6, name: 'Brown Sweet', description: 'Rich, caramel goodness.', price: '$15', button: 'Order Now' },

  { id: 7, img: Img7, name: 'Brown Sweet', description: 'Rich, caramel goodness.', price: '$15', button: 'Order Now' },
];

const Services = () => {

  const settings ={
    dots:true,
    arrows:true,
    infinite:true,
    speed:500,
    slidesToScroll:1,
    autoplay:false,
    autoplaySpeed:2000,
    cssEase:'linear',
    pauseOnHover:true,
    pauseOnFocus:true,
    responsive:[
        {
            breakpoint:10000,
            settings:{
                slidesToShow:4,
                slidesToScroll:1,
                infinite:true,
            },
        },

         {
            breakpoint:1024,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                initialSlide:2,
            },
        },

        {
            breakpoint:640,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            },
        },
    ]


}

  return (
    <>
    <span id='service'></span>
    <div>
      <div className="container bg-white">
        {/* Header section for Coffee */}
        <div className='text-center mt-10 font-bold text-2xl md:text-3xl p-10'>
          <h1>Our Special Coffee</h1>
        </div>

        {/* Service Cards */}
        <div className="max-w-screen-lg mx-auto p-4">
  <Slider {...settings}>
    {Service.map((data, index) => (
      <div key={index} className="p-2"> {/* Individual grid item */}
        <div className="bg-[#EFEAE6] p-4 rounded-lg hover:bg-primary group">
          <img
            src={data.img}
            alt="Coffee images"
            className="w-full h-auto mx-auto block rounded-lg"
          />
          <div className="p-2">
            <h1 className="text-xl font-bold">{data.name}</h1>
            <p className="text-gray-500 text-sm mt-1 group-hover:text-white">{data.description}</p>
            <div className="flex justify-between items-center mt-3">
              <p className="text-lg font-semibold">{data.price}</p>
              <button className="bg-secondary rounded-full px-3 py-2 text-white text-sm md:text-base group-hover:scale-105 transition-transform">
                {data.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>


        {/* Header section for Dessert */}
        <div className='text-center mt-10 font-bold text-2xl  p-10'>
          <h1>Our Special Dessert</h1>
        </div>

       <div className="max-w-screen-lg mx-auto p-4">
  <Slider {...settings}>
    {Dessert.map((data, index) => (
      <div key={index} className="p-2"> {/* Individual grid item */}
        <div className="bg-[#EFEAE6] p-4 rounded-lg hover:bg-primary group">
          <img
            src={data.img}
            alt="dessert images"
            className="w-full h-auto mx-auto block rounded-lg"
          />
          <div className="p-2">
            <h1 className="text-xl font-bold">{data.name}</h1>
            <p className="text-gray-500 text-sm mt-1 group-hover:text-white">{data.description}</p>
            <div className="flex justify-between items-center mt-3">
              <p className="text-lg font-semibold">{data.price}</p>
              <button className="bg-secondary rounded-full px-3 py-2 text-white text-sm md:text-base group-hover:scale-105 transition-transform">
                {data.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>


        
      </div>
    </div>
    </>
  );
};

export default Services;
