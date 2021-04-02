import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="md:px-12 pb-8 pt-12">
      <NavLink className="flex flex-row flex items-end" to="/">
        <img className="m-auto md:m-0" src="/logo4.png" alt="logo" />
        <span className="text-gray-700 text-4xl tracking-tighter font-bold pl-2 leading-none hidden md:block">mockd</span>
      </NavLink>
    </div>
  );
};

export default Logo;
