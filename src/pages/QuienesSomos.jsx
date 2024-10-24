import quienesSomos from '../images/quienes-somos.jpg'
import mision from '../images/mision.jpg'
import './QuienesSomos.scss'
import { Footer } from '../components/Footer'

export const QuienesSomos = () => {
  return (
    <>
      <section class="section-wrapper">
        <div class="content text-container">
          <h1 class="title">¿Quienes somos?</h1>
          <p class="description">Somos una empresa dedicada a la producción de sales mineralizadas/proteinadas para el consumo animal, en especial en bovinos en las etapas de levante, engorde, ceba y producción lactea.</p>
        </div>
        <div class="image-container">
          <img src={quienesSomos} alt="hero" />
        </div>
      </section>
      <section class="section-wrapper sw2">
        <div class="content text-container">
          <h1 class="title">Nuestra misión</h1>
          <p class="description">En Nutrisal, nos dedicamos a mejorar la salud y el rendimiento del ganado a través de soluciones nutricionales innovadoras y sostenibles. Nuestro compromiso es proporcionar productos de la más alta calidad que satisfagan las necesidades específicas de cada granja y ganadero.</p>
        </div>
        <div class="image-container">
          <img src={mision} alt="hero" />
        </div>
      </section>
      <hr class="my-7 mx-[50px] md:mx-[110px] h-1 md:h-2 border-t-0 rounded-xl bg-[#95a899] " />
      <section class="text-gray-600 body-font mb-[20px]">
        <div class="container px-5 mx-auto">
          <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-5 text-[#00c022] mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed text-lg font-bold text-[#00c022]">¡NUTRIR PARA PRODUCIR!</p>
            <h2 class="text-gray-900 font-medium  tracking-wider text-lg">- Nutrisal -</h2>

            <button class="flex mx-auto mt-16 text-white bg-[#00c022] border-0 py-2 px-8 focus:outline-none hover:bg-[#289e2a] rounded text-lg hover:scale-110 duration-100"><a href={`https://wa.me/573217580062/?text=Buenas,%20tienes%20sal%20mineralizada%20disponible?`} target='_blank'>Adquirir producto</a></button>
          </div>
        </div>
      </section>
      <Footer />
    </>

  )
}
