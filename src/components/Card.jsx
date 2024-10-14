import React from "react";

const Card = ({ gambar, nama_produk, harga, deskripsi }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 max-w-full">
      <img
        src={gambar}
        alt={nama_produk}
        className="w-80 h-36 object-cover"
      />
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-800 mb-1">
          {nama_produk}
        </h3>
        <p className="text-gray-500 mb-3 text-sm truncate">{deskripsi}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-500">{harga}</span>
          <button className="bg-blue-500 text-white px-3 py-1 rounded-full shadow hover:bg-blue-600 transition-colors duration-300 text-sm">
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
