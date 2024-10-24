import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { QuienesSomos } from "./pages/QuienesSomos"
import { Productos } from "./pages/Productos"
import { Contacto } from "./pages/Contacto"
import { NavBar } from "./components/Navbar/NavBar"

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  )
}

export default App
