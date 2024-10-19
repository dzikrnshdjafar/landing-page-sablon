import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Event listener untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0); // Jika scroll > 0, ubah state
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fungsi toggle untuk membuka/menutup menu di mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fungsi untuk scroll halus ke section yang dituju
  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Tutup menu jika di mobile
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-neutral-800' : 'bg-transparent'
    } backdrop-blur-none`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-3xl font-bold">
          <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Brand</a>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Links (Desktop & Mobile) */}
        <div
  className={`${
    isOpen ? 'flex' : 'hidden'
  } flex-col md:flex md:flex-row md:space-x-6 text-lg absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-neutral-800 md:bg-transparent text-white items-center transition-all duration-300 md:transition-none`}
>
  <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="py-2 px-4 hover:text-gray-300 transition">Home</a>
  <a href="#benefit" onClick={(e) => handleScroll(e, 'benefit')} className="py-2 px-4 hover:text-gray-300 transition">Benefit</a>
  <a href="#katalog" onClick={(e) => handleScroll(e, 'katalog')} className="py-2 px-4 hover:text-gray-300 transition">Katalog</a>
  <a href="#kontak" onClick={(e) => handleScroll(e, 'kontak')} className="py-2 px-4 hover:text-gray-300 transition">Kontak</a>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
