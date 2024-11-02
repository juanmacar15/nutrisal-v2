import { Footer } from "../components/Footer"

export const Contacto = () => {
  return (
    <>
    <div className="flex justify-center text-gray-600">
      <div>
      <main className="flex-grow container mx-auto px-4 py-8 justify-center">
        <h1 className="text-4xl font-bold mb-6">Contactos</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
          <p className="   mb-2">
            <strong>Dirección:</strong>Calle 9 cr 17</p>
          <p className="   mb-2">
            <strong>Teléfono:</strong> +57 3217580062
          </p>
          <p className="   mb-2">
            <strong>Email:</strong> Nutrisal2024@gmail.com
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Horario de Atención</h2>
          <p className="   mb-2">Lunes a Viernes: 8:00 AM -12:00AM y 1:00PM- 5:30PM</p>
          <p className="   mb-2">Sábados: 9:00 AM - 1:00 PM</p>
          <p className="  ">Domingos: Cerrado</p>
        </section>
        <button class="flex mx-auto mt-16 text-white bg-[#00c022] border-0 py-2 px-8 focus:outline-none hover:bg-[#289e2a] rounded text-lg hover:scale-110 duration-100"><a href={`https://wa.me/573217580062/?text=Buenas,%20me%20gustaria%20obtener%20mas%20información`} target='_blank'>Enviar mensaje</a></button>
      </main>
      </div>
    </div>
    <Footer />
    </>
  )
}
