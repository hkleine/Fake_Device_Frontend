import React from "react";
import SensorCard from './SensorCard'

import AddDeviceButton from './AddDeviceButton';
import { Device } from "../types";

const SensorGrid = ({sensors, updateSensors}: any) => {

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10">
        {sensors.map((sensor: Device, index: number) => {
            return <SensorCard key={index} sensorIn={sensor} updateSensors={updateSensors} />
        })}
     <AddDeviceButton />
    </div>
  );
};

export default SensorGrid;