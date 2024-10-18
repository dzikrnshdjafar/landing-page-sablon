import greenSplash from "../assets/green.png";
import blueSplash from "../assets/blue.png";
import pinkSplash from "../assets/pink.png";
import purpleSplash from "../assets/purple.png";
import orangeSplash from "../assets/orange.png"; // Tambahkan orange splash

const BgSplash = ({ children }) => {
  const splashes = [
    greenSplash,
    blueSplash,
    pinkSplash,
    purpleSplash,
    orangeSplash,
  ];

  // Generate random positions for splash images
  const positions = Array.from({ length: 24 }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }));

  return (
    <div className="relative overflow-hidden bg-neutral-900">
      {/* Splash Background */}
      {positions.map((position, index) => (
        <img
          key={index}
          src={splashes[index % splashes.length]}
          className="absolute object-cover w-96 h-96 backdrop-blur-sm"
          style={{
            top: position.top,
            left: position.left,
            margin: "10px",
          }}
        />
      ))}

      {/* Children Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BgSplash;
