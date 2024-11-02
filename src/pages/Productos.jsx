import React from 'react'
import { Footer } from '../components/Footer'
import { products } from '../products'


export const Productos = () => {


  return (
    <>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h1 className='title-font text-center py-[20px] md:py-[30px] text-[18px] md:text-3xl  font-medium text-[#00c022]'>Nuestros productos</h1>
          <div className="mb-4 grid  gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((pro) => (
              <div key={pro.id} className="rounded-lg border border-gray-300 bg-white p-6 shadow-md ">
                  <p className="text-xl text-center font-semibold leading-tight text-gray-900  ">{pro.nombre}</p>
                <div className="h-56 w-full">
                  <img className="mx-auto h-full " src={pro.img} alt="" />
                </div>
                <div className="pt-6" >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex items-center justify-end gap-1">
                      <div id="tooltip-quick-look" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                        Quick look
                        <div className="tooltip-arrow" data-popper-arrow=""></div>
                      </div>

                      <div id="tooltip-add-to-favorites" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                        Add to favorites
                        <div className="tooltip-arrow" data-popper-arrow=""></div>
                      </div>
                    </div>
                  </div>                  <div className="mt-4 flex flex-col justify-between gap-4">
                    <p className="text-2xl text-center leading-tight text-gray-900">{pro.precio} COP</p>
                    <div className='flex justify-center gap-3'>
                    <button className="inline-flex items-center text-white rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium bg-[#21b33c] hover:bg-[#289e2a]">
                      <a
                        href={`https://wa.me/573217580062/?text=Buenas,%20tienes%20${encodeURIComponent(pro.nombre)}%20disponible?`}
                        target='_blank'
                      >
                        Comprar
                      </a>
                    </button>
                    {/* <button className="inline-flex items-center rounded-lg  text-white bg-primary-700 px-5 py-2.5 text-sm font-medium bg-[#21b33c] hover:bg-[#289e2a] ">
                      PDF
                    </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
