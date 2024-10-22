import React, { useState } from "react";
import Splash from "../assets/splash.svg";
import kaos1 from "../assets/kaos/kaos1.jpg";
import kaos2 from "../assets/kaos/kaos2.jpg";
import kaos3 from "../assets/kaos/kaos3.jpg";
import kaos4 from "../assets/kaos/kaos4.jpg";
import kaos5 from "../assets/kaos/kaos5.jpg";
import kaos6 from "../assets/kaos/kaos6.jpg";
import kaos7 from "../assets/kaos/kaos7.jpg";
import kaos8 from "../assets/kaos/kaos8.jpg";
import kaos9 from "../assets/kaos/kaos9.jpg";
import kaos10 from "../assets/kaos/kaos10.jpg";

const Katalog = () => {
  const katalogs = [kaos1, kaos2, kaos3, kaos4, kaos5, kaos6, kaos7, kaos8, kaos9, kaos10 ];
  
  // State untuk mengontrol modal dan gambar yang sedang di-preview
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Menghitung index dari item yang akan ditampilkan pada halaman yang aktif
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = katalogs.slice(indexOfFirstItem, indexOfLastItem);

  // Menghitung jumlah halaman
  const totalPages = Math.ceil(katalogs.length / itemsPerPage);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  // Fungsi untuk mengubah halaman
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section
      id="katalog"
      className="relative px-4 md:px-10 lg:px-20 py-20 bg-primary overflow-hidden"
    >
      {/* Gambar Splash */}
      <img
        src={Splash}
        alt="Splash"
        className="absolute -top-10 -right-10 w-40 h-auto md:w-60 lg:w-80 max-w-full object-contain"
        style={{ maxWidth: "100vw" }} // Mencegah melebar ke kanan
      />

      <h2 className="lg:text-7xl hp:text-4xl text-center font-semibold text-slate z-20">
        Katalog Produk
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {currentItems.map((katalog, index) => (
          <div className="w-full hp:w-1/4 md:w-1/3 lg:w-1/4" key={index}>
            <img
              src={katalog}
              alt={`Produk ${index + 1}`}
              className="object-cover w-full h-auto hp:max-h-20 md:max-h-64 lg:max-h-80 max-w-xs rounded-xl cursor-pointer"
              onClick={() => openModal(katalog)} // Membuka modal saat gambar diklik
              loading="lazy" // Menambahkan lazy loading
            />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-secondary text-primary rounded-xl disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-slate">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-secondary text-primary rounded-xl disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Modal Preview */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal} // Menutup modal saat area luar gambar diklik
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={currentImage}
              alt="Preview"
              className="desktop:max-w-[50rem] hp:max-w-[20rem] desktop:max-h-[50rem] hp:max-h-[20rem] rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Katalog;
