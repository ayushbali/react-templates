import React from 'react'
import banner from '../images/green-banner.png'

const Hero = () => {
  return (
    <div className="container flex sm:w-full gap-0 p-0 justify-between mx-auto sm:gap-10">
        <div className="hero sm:w-1/2 w-full mx-4 p-0 flex flex-col flex-wrap justify-center gap-10 sm:m-8">
          <h1 className="title sm:text-6xl text-2xl font-black text-white">Lorem Imspum Dolor Text that is dope and cool.</h1>
          <p className="subtitle text-sm sm:text-2xl font-light text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e</p>
          <p className="cta text-white border border-white rounded-xl text-center w-full text-xs p-0 sm:w-1/2 md:w-1/2 font-bold px-2 py-1">THE CTA COMES HERE</p>
        </div>
        <div className="banner-img">
          <img src={banner} className='h-screen sm:w-full mx-50 block' />
        </div>
      </div>
  )
}

export default Hero