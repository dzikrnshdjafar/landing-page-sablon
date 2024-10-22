import React, { useState } from "react";
import Splash from "../assets/splash.svg";

// Contoh data produk dan harga
const priceListData = [
  { id: 1, name: "Kaos 1", price: 100000},
  { id: 2, name: "Kaos 2", price: 120000},
  { id: 3, name: "Kaos 3", price: 110000},
  { id: 4, name: "Kaos 4", price: 130000},
  { id: 5, name: "Kaos 5", price: 125000},
  { id: 6, name: "Kaos 6", price: 140000},
  { id: 7, name: "Kaos 7", price: 115000},
  { id: 8, name: "Kaos 8", price: 150000},
  { id: 9, name: "Kaos 9", price: 135000},
  { id: 10, name: "Kaos 10", price: 160000},
];

const PriceList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "name", direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...priceListData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

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
      id="pricelist"
      className="relative px-4 md:px-10 lg:px-20 py-20 bg-orange-100 overflow-hidden"
    >


      <h2 className="lg:text-7xl hp:text-4xl text-center font-semibold text-primary z-20">
        Daftar Harga
      </h2>

      {/* Input pencarian */}
      <div className="flex justify-center mt-8">
        <input
          type="text"
          placeholder="Cari produk..."
          className="px-4 py-2 rounded-lg text-slate-800"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Tabel produk */}
      <div className="overflow-x-auto mt-10 items-center justify-center flex">
        <table className="lg:min-w-[40rem] hp:min-w-full  bg-neutral-800 rounded-xl text-slate">
          <thead>
            <tr>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("name")}>
                Nama Produk {sortConfig.key === "name" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("price")}>
                Harga {sortConfig.key === "price" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((product) => (
              <tr key={product.id} className="hover:bg-neutral-700">
                <td className="px-4 py-4 text-center">{product.name}</td>
                <td className="px-4 py-4 text-center">{`Rp${product.price.toLocaleString()}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-secondary text-primary rounded-xl disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-primary">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-secondary text-primary rounded-xl disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default PriceList;
