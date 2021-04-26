import React from 'react';
import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <div className="md:px-12 pb-8 pt-12">
      <NavLink className="flex flex-row flex items-end" to="/">
        <img className="m-auto md:m-0" src="/logo.png" alt="logo" />
        <span className="text-gray-600 text-4xl tracking-tighter font-bold pl-2 leading-none hidden md:block">mockd</span>
      </NavLink>
    </div>
  );
};
