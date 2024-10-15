const TShirtMarqueeCard = ({ images, title, subtitle, buttonText }) => {
  return (
    <div className="relative bg-orange-400 rounded-3xl overflow-hidden w-full max-w-6xl lg:h-full hp:h-60 lg:py-20 hp:py-10 shadow-lg">
      {/* Gambar baju bergerak */}
      <div className="marquee-container overflow-hidden relative">
        <div className="marquee flex">
          {images.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt={`T-shirt ${index + 1}`}
              className="w-1/3 max-h-80 object-contain"
            />
          ))}
          {/* Double the images to make the marquee seamless */}
          {images.map((imageSrc, index) => (
            <img
              key={index + images.length}
              src={imageSrc}
              alt={`T-shirt ${index + 1}`}
              className="w-1/3 max-h-80 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <div className="text-center text-white px-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-lg">{subtitle}</p>
          <button className="mt-6 bg-black text-white px-4 py-2 rounded-lg">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TShirtMarqueeCard;
