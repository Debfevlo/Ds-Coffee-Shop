import React from 'react';
import DisImg from '../../assets/images/coffee-beans-bg.png'

const discountImg = {
    backgroundImage: `url(${DisImg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    height:'100%',
    width:'100%'
}

const Discount = () => {
  return (
    <div style={discountImg} className='py-14'>
        <div className="container text-center">
            <div>
                <div >
                <h1 className='text-2xl text-primary'>Join in and get 15% off!</h1>
                </div>
                <p className='text-gray-400 text-xs md:text-base sm:text-base'>You don't want to miss this amazing discount. This is your only chance to have a great coffee every morning</p>

                <div className="flex flex-col sm:flex-row md:justify-center sm:justify-center items-center gap-4 w-full">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="p-3 rounded-full text-left w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border mt-5"
                            />

                            <button className="bg-primary text-white p-3 rounded-full hover:scale-105 w-full sm:w-auto text-center mt-5">
                                Subscribe
                            </button>
                            </div>

            </div>
        </div>
    </div>
  )
}

export default Discount