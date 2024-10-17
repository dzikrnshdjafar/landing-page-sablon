const Card = ({ title, description }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg w-full h-full flex flex-col justify-center items-center">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
