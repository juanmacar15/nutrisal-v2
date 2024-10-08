import React from 'react'
import ImgBackground from '../images/fondoNutrisal.jpg'
import Logo from '../images/nutrisal.png'

export const Header = () => {
  return (
    <header className='relative h-56 md:h-96 lg:h-[420px] w-full overflow-hidden'>
      <img 
        src={ImgBackground} 
        alt="fondo de pantalla" 
        className='object-cover w-full h-full'/>

      <div className='absolute inset-0 bg-black bg-opacity-40' />
      <div className='absolute inset-0 flex items-center justify-center'>
        <img 
          src={Logo} 
          alt=""
          className='max-w-[250px] md:max-w-[350px] lg:max-w-[450px]' />
      </div>
    </header>
  )
}
