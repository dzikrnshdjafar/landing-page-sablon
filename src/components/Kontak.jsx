import { motion } from "framer-motion";

const Kontak = () => {
  const formVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, duration: 1, delay: 0.2 },
    },
  };

  return (
    <section
      id="kontak"
      className="h-screen flex flex-col items-center justify-center bg-gray-200 relative"
    >
      
      {/* Judul Section */}
      <motion.h2
        className="text-7xl font-bold text-Neutral-900 text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
      >
        Kontak Kami
      </motion.h2>

      {/* Formulir Kontak */}
      <motion.form
        className="bg-white shadow-md rounded-lg p-8 w-[90%] max-w-[600px] space-y-6"
        variants={formVariant}
        initial="hidden"
        animate="visible"
      >
        {/* Nama */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2" htmlFor="name">
            Nama
          </label>
          <input
            id="name"
            type="text"
            placeholder="Masukkan nama Anda"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-200"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Masukkan email Anda"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-200"
          />
        </div>

        {/* Pesan */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2" htmlFor="message">
            Pesan
          </label>
          <textarea
            id="message"
            placeholder="Tulis pesan Anda di sini"
            className="border border-gray-300 rounded-md p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-fuchsia-200"
          ></textarea>
        </div>

        {/* Tombol Kirim */}
        <motion.button
          type="submit"
          className="w-full bg-secondary text-neutral-900 font-semibold py-2 rounded-md hover:bg-sechov transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Kirim Pesan
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Kontak;
