import videobg from "../assets/walking.mp4"

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative lg:h-[50rem] hp:h-[30rem] flex items-center justify-center text-slate-100"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videobg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to darken the video for better text contrast */}
        <div className="absolute inset-0 bg-neutral-700 opacity-50"></div>

        {/* Content */}
        <h1 className="relative z-10 text-7xl font-bold">SABLON KAOS</h1>
      </section>

      <div className="bg-orange-400 text-center py-2">
        <h1 className="font-bold lg:text-3xl hp:text-lg"> UP TO 30% OFF EVERY TIME </h1>
      </div>
    </>
  );
};

export default Home;
