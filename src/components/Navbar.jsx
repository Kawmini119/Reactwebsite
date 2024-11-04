import  { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full p-4 md:flex md:justify-between md:items-center border-b-2 border-black bg-white z-50">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-dmSerif text-[24px] md:text-[30px] font-bold hover:underline ml-4 md:ml-32">
          Frontend Practice
        </Link>
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden focus:outline-none mr-4"
        >
          ☰
        </button>
      </div>
      
      <div className="hidden md:flex md:flex-row gap-4 md:gap-10 mr-4 md:mr-10 font-archivo">
        <Link to="/" className="font-bold text-lg hover:underline focus:outline-dotted">Home</Link>
        <Link to="/projects" className="font-bold text-lg hover:underline focus:outline-dotted">Projects</Link>
        <Link to="/blog" className="font-bold text-lg hover:underline focus:outline-dotted">Blog</Link>
        <Link to="/faq" className="font-bold text-lg hover:underline focus:outline-dotted">FAQ</Link>
        <Link to="/contact" className="font-bold text-lg focus:outline-dotted">Contact</Link>
        <Link to="/newsletter" className="font-bold text-lg hover:underline focus:outline-dotted">
          Newsletter <span className="ml-1 text-xl">↗</span>
        </Link>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="text-2xl absolute top-4 right-4 focus:outline-none"
        >
          ×
        </button>
        
        <div className="flex flex-col items-start mt-16 ml-4 font-archivo">
          <Link to="/" onClick={toggleMenu} className="font-bold text-lg mb-4 hover:underline focus:outline-dotted">Home</Link>
          <Link to="/projects" onClick={toggleMenu} className="font-bold text-lg mb-4 hover:underline focus:outline-dotted">Projects</Link>
          <Link to="/blog" onClick={toggleMenu} className="font-bold text-lg mb-4 hover:underline focus:outline-dotted">Blog</Link>
          <Link to="/faq" onClick={toggleMenu} className="font-bold text-lg mb-4 hover:underline focus:outline-dotted">FAQ</Link>
          <Link to="/contact" onClick={toggleMenu} className="font-bold text-lg mb-4 focus:outline-dotted">Contact</Link>
          <Link to="/newsletter" onClick={toggleMenu} className="font-bold text-lg hover:underline focus:outline-dotted">
            Newsletter <span className="ml-1 text-xl">↗</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
