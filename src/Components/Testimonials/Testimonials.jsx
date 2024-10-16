import React from 'react';
import Slider from 'react-slick';


const TestimonialData = [
    {
        id:1,
        name:'Debbie',
        text: "The best coffee experience I've ever had! Their cappuccino is rich, creamy, and perfectly balanced. It’s my go-to pick-me-up every morning!",
        img:'https://picsum.photos/101/101',
    },

    {
        id:2,
        name:'Etornam',
        text: "Their latte is incredible—smooth and full of flavor without being too bitter. I love stopping by for one on my way to work!",
        img:'https://picsum.photos/102/102',
    },

    {
        id:3,
        name:'Makafui',
        text: "I tried the Americano here, and it was perfect: bold and aromatic. You can tell they use quality beans. Highly recommend!",
        img:'https://picsum.photos/103/103',
    },

    {
        id:4,
        name:'Godsway',
        text: "The cold brew is the perfect summer drink! Refreshing, not too sweet, and keeps me energized throughout the day.",
        img:'https://picsum.photos/104/104',
    },

    {
        id:4,
        name:'Godsway',
        text: "This is my new favorite spot for espresso. It’s rich, intense, and has a beautiful crema on top. A must-try for coffee lovers!",
        img:'https://picsum.photos/103/103',
    },


]

const Testimonials = () => {
const settings ={
    dots:true,
    arrows:false,
    infinite:true,
    speed:500,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase:'linear',
    pauseOnHover:true,
    pauseOnFocus:true,
    responsive:[
        {
            breakpoint:10000,
            settings:{
                slidesToShow:3,
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
    <div className='py-14 mb-10'>
        <div className="container">
            <div className='text-center mb-10'>
                <h1 className='text-2xl font-bold'> 
                    Testimonials
                </h1>
            </div>

            <div>
                <Slider {... settings}>
                    {
                        TestimonialData.map((data, index)=>{
                            return(
                                <div key={data.id} className='my-6'>
                                    <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative '>
                                        <div className='mb-4'>
                                            <img src={data.img} alt="image of people" className='rounded-full w-20 h-20' />
                                        </div>
                                        <div className='flex flex-col items-center gap-4'>
                                            <div className='space-y-3'>
                                                <p classNmae='text-xs text-gray-500  '>{data.text}</p>
                                                <h1 className='text-xl font-bold text-black/80 '>{data.name}</h1>
                                            </div>
                                        </div>
                                        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonials