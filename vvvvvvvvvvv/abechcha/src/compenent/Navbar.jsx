import { useState } from 'react';
import "../index.scss";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" text-white p-4 h-20">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-xl font-bold">Genius School</div>
        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        <div className="hidden md:flex   space-x-4 items-center justify-center flex-grow ">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">Categories</a>
          <a href="#" className="hover:text-yellow-400">Contact us</a>
          <a href="#" className="hover:text-yellow-400">About</a>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-blue-950 backdrop-blur-sm absolute top-20 left-0 right-0  p-4">
          <a href="#" className="block py-2 hover:text-yellow-400">Home</a>
          <a href="#" className="block py-2 hover:text-yellow-400">Categories</a>
          <a href="#" className="block py-2 hover:text-yellow-400">Contact us</a>
          <a href="#" className="block py-2 hover:text-yellow-400">About</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;