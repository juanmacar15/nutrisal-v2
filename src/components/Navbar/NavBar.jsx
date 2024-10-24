import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (node.current && !node.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Quienes Somos', path: '/quienes-somos' },
    { name: 'Productos', path: '/productos' },
    { name: 'Contactos', path: '/contacto' },
  ];

  return (
  <nav className="navbar text-white md:bg-[#21b33c]" ref={node}>
    <div className="container mx-auto px-4 flex justify-center ">
      <div className="relative flex justify-between items-center py-3">
        {/* Botón del menú hamburguesa */}
        <div className="fixed top-0 right-0 m-4 z-50 md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:ring-2 focus:ring-white rounded-md"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú para pantallas grandes */}
        <ul className="hidden md:flex md:justify-center md:space-x-8 md:bg-transparent md:shadow-none text-green-950">
          {navItems.map((item) => (
            <li key={item.name} className="block md:inline-block">
              <Link
                to={item.path}
                className={`block  px-4 hover:bg-green-600 md:hover:bg-transparent md:hover:text-green-200 transition-colors ${
                  location.pathname === item.path ? 'bg-green-600 md:bg-transparent border-b-2 border-white text-white' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Menú desplegable para móviles */}
    <div
      className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-[#21b33c] z-40 transform transition-transform duration-300 ease-in-out shadow-md ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <ul className="space-y-4 p-8 pt-16">
        {navItems.map((item) => (
          <li key={item.name} className="block">
            <Link
              to={item.path}
              className={`block py-2 px-2 hover:bg-[#0e8724fe] transition-colors text-center hover:text-white ${
                location.pathname === item.path ? ' border-white border-b-2 ' : 'text-white'
              }`}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);


};
