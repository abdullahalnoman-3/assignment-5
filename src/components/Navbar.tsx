import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm px-2 sm:px-4 lg:px-12">
      <div className="navbar-start w-1/4 lg:w-1/2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Technologies</a></li>
            <li><a>Projects</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl hidden lg:flex gap-2">
          <div className="bg-gradient text-white font-bold p-1.5 rounded-lg">DS</div>
          <span className="font-bold">Dev<span className="text-pink-500">Stack</span></span>
        </a>
      </div>
      <div className="navbar-center flex-1 lg:flex-none justify-center">
        <a className="btn btn-ghost text-lg sm:text-xl flex lg:hidden gap-1.5 px-1">
          <div className="bg-gradient text-white font-bold p-1 rounded">DS</div>
          <span className="font-bold">Dev<span className="text-pink-500">Stack</span></span>
        </a>
        <ul className="menu menu-horizontal px-1 font-medium text-gray-600 hidden lg:flex">
          <li><a>Home</a></li>
          <li><a>Technologies</a></li>
          <li><a>Projects</a></li>
        </ul>
      </div>
      <div className="navbar-end w-auto lg:w-1/2 gap-0 sm:gap-2">
        <a className="btn btn-ghost btn-sm sm:btn-md font-semibold text-gray-600 px-2 sm:px-4 text-xs sm:text-sm">Sign In</a>
        <a className="btn btn-gradient btn-sm sm:btn-md rounded-full px-3 sm:px-6 border-none text-white font-medium text-xs sm:text-sm">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;