import { useEffect, useState } from "react";
import Card from "./Card"; // Impor komponen Card
import test from "../assets/test.png"

const Katalog = () => {
  const [produk, setProduk] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduk = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxajm9LpkpXebtr_Q0Bh7OC1v3b96PPQArQ-7k3pyFjhSoYLmQrr9dT2JXky1tdj2SI/exec"
        );
        const data = await response.json();
        setProduk(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduk();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <section id="katalog" className="min-h-screen bg-white px-4 md:px-10 lg:px-20 p-20">
      <h2 className="text-4xl text-center font-semibold text-gray-800">Katalog Produk</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-6 px-4">
        {produk.map((item, index) => (
          <div>
            <img src={test} alt="aaa" />
            <img src={test} alt="aaa" />
            <img src={test} alt="aaa" />
            <img src={test} alt="aaa" />
            <img src={test} alt="aaa" />
          </div>
          // <Card
          //   key={index}
          //   // gambar={`https://lh3.googleusercontent.com/d/${item.gambar}`}
          //   gambar={test}
          //   nama_produk={item.nama_produk}
          //   harga={item.harga}
          //   deskripsi={item.deskripsi}
          // />
        ))}
      </div>
    </section>
  );
};

export default Katalog;
