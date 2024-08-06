import "../index.scss";

const Welcome = () => {
  return (
    <div className="text-white py-16">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row items-center justify-around ">
          <div className=" mb-8 md:mb-0 ">
            <h1 className="text-6xl font-extrabold mb-4 text-left leading-[1.1] welcome ">Welcome to a place <br/> where your journey to <br/> knowledge <br/> and success begins!

</h1>
            {/* <p className="mb-8 text-[#dadada]  leading-relaxed text-lg">With GeniusSchool, your path to success is assured with a guaranteed diploma! Explore your chosen field and unlock your potential with our tailored programs. Discover the opportunities that await you and take the first step towards a bright future today!</p> */}
          </div>
          <div className="relative w-full max-w-sm  md:w-auto img_container">
            <div className="absolute top-6 left-6 w-24 h-24 md:w-32 md:h-32 bg-yellow-400 rounded-full z-0"></div>
            <div className="absolute bottom-9 right-9 w-20 h-20 md:w-24 md:h-24 bg-purple-500 rounded-full z-0"></div>
            <img 
              src="/3eziya.png" 
              alt="Student" 
              className="w-full  h-[550px]  object-cover rounded-lg z-10 relative"  
              // md:w-80 md:h-80
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;