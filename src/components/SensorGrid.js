import React from "react";
import SensorCard from './SensorCard'
import { HiOutlinePlus } from 'react-icons/hi';
import { IconContext } from 'react-icons';

const SensorGrid = ({sensors}) => {
    console.log(sensors);
  return (
    <div className="grid pt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {sensors.map((sensor, index) => {
            return <SensorCard key={index} sensorIn={sensor} />
        })}
      <button className="max-w-sm rounded-lg overflow-hidden text-gray-700 shadow-sm bg-white p-4 flex flex-col justify-center">
        <IconContext.Provider value={{ style: { fontSize: '70px' } }}>
            <div className="m-auto">
              <HiOutlinePlus />
            </div>
          </IconContext.Provider>
          <span className="m-auto">Add New Device</span>
      </button>
    </div>
  );
};

export default SensorGrid;