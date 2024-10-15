const TShirtCard = ({ images, title, subtitle, buttonText }) => {
    return (
      <div className="relative bg-orange-100 rounded-lg overflow-hidden w-full max-w-6xl shadow-lg">
        {/* Gambar baju */}
        <div className="flex justify-center items-center space-x-4">
          {images.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt={`T-shirt ${index + 1}`}
              className="w-1/3 h-auto object-cover"
            />
          ))}
        </div>
  
        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="text-center text-white px-6">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-lg">{subtitle}</p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TShirtCard;
  