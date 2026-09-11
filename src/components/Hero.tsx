import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-[80vh] bg-base-100 px-4 lg:px-12 py-6 lg:py-20">
      <div className="hero-content flex-col lg:flex-row justify-between w-full max-w-7xl mx-auto gap-4 lg:gap-8">
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Build Your Ideal <br className="hidden sm:block lg:hidden" />
            <span className="text-gradient">Development Stack</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex flex-row w-full gap-3 lg:gap-4 justify-center lg:justify-start mb-2 lg:mb-0">
            <button className="btn btn-gradient flex-1 lg:flex-none px-2 sm:px-8 shadow-lg shadow-pink-500/30 font-semibold rounded-xl border-none text-[13px] sm:text-base">Explore Technologies</button>
            <button className="btn btn-outline flex-1 lg:flex-none border-gray-300 text-gray-600 px-2 sm:px-8 hover:bg-gray-100 hover:text-black font-semibold rounded-xl text-[13px] sm:text-base">Learn More</button>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <img src="/assets/banner-stack.png" className="w-full max-w-md lg:max-w-[600px] object-contain drop-shadow-2xl" alt="Stack illustration" />
        </div>
      </div>
    </div>
  );
};

export default Hero;