import React from "react";

const Card = ({ gambar, nama_produk, harga, deskripsi }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 w-full h-72 sm:h-64 md:h-80 lg:h-96 xl:h-112 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl">
      <img
        src={gambar}
        alt={nama_produk}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-2 sm:p-4 md:p-6 lg:p-8">
        <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold text-white mb-1">
          {nama_produk}
        </h3>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-3 truncate">
          {deskripsi}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-300">
            Rp.{harga}
          </span>
          <a
            href={`https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20produk%20${nama_produk}%20Anda`}
            target="_blank"
            className="bg-green-700 text-white px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-2 rounded-full shadow hover:bg-green-800 transition-colors duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
          >
            Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
