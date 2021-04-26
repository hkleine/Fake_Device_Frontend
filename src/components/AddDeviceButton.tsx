import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlinePlus } from 'react-icons/hi';
import { IconContext } from 'react-icons';

export const AddDeviceButton = () => {
  return (
    <NavLink
      to="/add"
      className="max-w-sm rounded-lg outline-none overflow-hidden shadow-sm bg-white p-4 flex flex-col justify-center hover:shadow-xl"
    >
      <IconContext.Provider value={{ style: { fontSize: '70px' } }}>
        <div className="m-auto">
          <HiOutlinePlus />
        </div>
      </IconContext.Provider>
      <span className="m-auto">New Device</span>
    </NavLink>
  );
};
