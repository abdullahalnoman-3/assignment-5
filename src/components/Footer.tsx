import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-4 lg:px-12 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex gap-2 items-center mb-6">
              <div className="bg-gradient text-white font-bold p-1 rounded-lg text-lg">DS</div>
              <span className="font-bold text-2xl">Dev<span className="text-pink-500">Stack</span></span>
            </div>
            <p className="text-gray-500 text-base mb-8 leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 items-center">
              <a href="#" className="text-gray-600 hover:text-black font-semibold text-base">GitHub</a>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-gray-600 hover:text-blue-400 font-semibold text-base">Twitter</a>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-gray-600 hover:text-blue-700 font-semibold text-base">LinkedIn</a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <h3 className="font-bold text-gray-800 mb-6 text-sm tracking-wider">PRODUCT</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-500">Home</a></li>
              <li><a href="#" className="hover:text-pink-500">Technologies</a></li>
              <li><a href="#" className="hover:text-pink-500">Projects</a></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="font-bold text-gray-800 mb-6 text-sm tracking-wider">COMPANY</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-500">About</a></li>
              <li><a href="#" className="hover:text-pink-500">Contact</a></li>
              <li><a href="#" className="hover:text-pink-500">Careers</a></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="font-bold text-gray-800 mb-6 text-sm tracking-wider">LEGAL</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-500">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="w-full border-t border-gray-100 pt-8 flex justify-between items-center text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-500">Privacy</a>
            <a href="#" className="hover:text-gray-500">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
