import React from 'react'
import calidad from '../images/calidad.png'
import bienestar from '../images/bienestar.png'
import dinero from '../images/dinero.png'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div>
      <h1 className='title-font text-center py-[20px] md:py-[30px] text-[18px] md:text-3xl  mb-4 font-medium text-[#00c022]'>Bienvenidos a Nutrisal</h1>
      <div className='text-gray-700 container px-5 text-center mx-auto'>
        <p className='leading-relaxed text-[15px] md:text-lg font-normal '>Nutrisal es tu fuente confiable de productos nutricionales para ganado. Nos dedicamos a proporcionar soluciones de alta calidad para la salud y el bienestar animal, mejorando la productividad y rentabilidad de tu negocio ganadero.</p>
      </div>
      <button class="flex mx-auto mt-16 text-white bg-[#00c022] border-0 py-2 px-8 focus:outline-none hover:bg-[#289e2a] rounded text-lg hover:scale-110 duration-100"><a href={`https://wa.me/573217580062/?text=Buenas,%20tienes%20sal%20mineralizada%20disponible?`} target='_blank'>Adquirir producto</a></button>
      <hr class="my-10 mx-[50px] md:mx-[110px] h-1 md:h-2 border-t-0 rounded-xl bg-[#b2beb4] " />
      <h1 className='title-font text-center py-[10px] md:py-[20px] text-[18px] md:text-3xl text-xl mb-4 font-medium text-[#00c022]'>¿Por Qué Elejirnos?</h1>
      <section classNameName="text-gray-600 body-font p">
        <div classNameName="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-4 text-gray-700">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className=" text-center">
                <h2 className="text-gray-900  font-medium title-font tracking-wider md:text-lg">Por nuestra calidad</h2>
                <hr class="my-1 mx-[50px] md:mx-[110px] h-1 md:h-1 border-t-0 rounded-xl bg-[#00c022] " />
                <p className="leading-relaxed text-[15px] md:text-lg font-normal ">Somos una empresa con altos estándares de calidad, asegurando que cada producto cumple con los requisitos más exigentes. Nuestro proceso de producción es supervisado minuciosamente para garantizar la consistencia, seguridad y efectividad en cada lote que fabricamos.</p>
                <img alt="calidad" className="w-20 h-20 my-8 inline-block " src={calidad} />
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <h2 className="text-gray-900  font-medium title-font tracking-wider text-lg">Por el bienestar de tus animales</h2>
                <hr class="my-1 mx-[50px] md:mx-[110px] h-1 md:h-1 border-t-0 rounded-xl bg-[#00c022] " />
                <p className="leading-relaxed text-[15px] md:text-lg font-normal">Nutrisal garantiza el contenido nutricional de sus productos, que además de minerales esenciales, incluye proteína vegetal (soya), nitrógeno no proteico, vitaminas y microorganismos que mejoran la digestión de los animales.</p>
                <img alt="bienestar" className="w-20 h-20 my-8 inline-block" src={bienestar} />
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <h2 className="text-gray-900  font-medium title-font tracking-wider text-lg">Por el bien de tu bolsillo</h2>
                <hr class="my-1 mx-[50px] md:mx-[110px] h-1 md:h-1 border-t-0 rounded-xl bg-[#00c022] " />
                <p className="leading-relaxed text-[15px] md:text-lg font-normal">Entendemos la importancia de ofrecer productos accesibles sin sacrificar calidad. Nuestros productos son los más económicos en relación calidad-precio. Optimizamos procesos para reducir costos y permitirte cuidar la salud de tus animales sin afectar tus finanzas.</p>
                <img alt="dinero" className="w-20 h-20 my-8 inline-block" src={dinero} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
