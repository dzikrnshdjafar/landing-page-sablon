import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home"><h1 className="text-2xl font-bold text-blue-600">MyLanding</h1></a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#katalog"
                  className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Katalog
                </a>
                <a
                  href="#kontak"
                  className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Kontak
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-blue-500 p-2 rounded-md text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              ☰
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#katalog"
              className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Katalog
            </a>
            <a
              href="#kontak"
              className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Kontak
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
