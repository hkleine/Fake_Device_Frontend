import userEvent from "@testing-library/user-event";
import React from "react";
import { HiOutlineCode, HiOutlineTrash } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import Toggle from 'react-toggle';
import "react-toggle/style.css"

const SensorCard = ({sensor}) => {
    console.log(sensor);
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-sm bg-white p-4">
        <div className="flex flex-col">
            <div className="flex flex-row. justify-between">
                <h3 className="text-gray-700 text-lg">{sensor.name}</h3>
                <div className="flex flex-row">
                    <button className="outline-none pr-2">
                        <IconContext.Provider value={{ style: { fontSize: '20px' } }}>
                            <div className="text-gray-600">
                                <HiOutlineCode />
                            </div>
                        </IconContext.Provider>
                    </button>
                    <button className="outline-none">
                        <IconContext.Provider value={{ style: { fontSize: '20px' } }}>
                            <div className="text-gray-600">
                                <HiOutlineTrash />
                            </div>
                        </IconContext.Provider>
                    </button>
                </div>
            </div>
            {sensor.protocol === 'http' &&
                <div>
                    <div className="flex flex-row justify-between py-4">
                        <span className="text-gray-600 text-sm">{sensor.http_host}:{sensor.http_port}{sensor.http_route}</span>
                        <div class="flex justify-center items-center py-2 px-4 rounded-full text-white bg-primary shadow-md">
                            <div class="text-xs font-normal leading-none max-w-full flex-initial">{sensor.protocol}</div>
                        </div>
                    </div>
                    <label>
                        <Toggle
                            className="toggle"
                            defaultChecked={sensor.isRunning}
                            icons={false} />
                    </label>
                </div>
            }
            {sensor.protocol === 'mqtt' &&
                <div>
                    <div className="flex flex-row justify-between py-4">
                        <span className="text-gray-600 text-sm">{sensor.mqtt_topic}</span>
                        <div class="flex justify-center items-center py-2 px-4 rounded-full text-white bg-indigo-500 shadow-md">
                            <div class="text-xs font-normal leading-none max-w-full flex-initial">{sensor.protocol}</div>
                        </div>
                    </div>
                    <label>
                        <Toggle
                            className="toggle"
                            defaultChecked={sensor.isRunning}
                            icons={false} />
                    </label>
                </div>
            }
        </div>
    </div>
  );
};

export default SensorCard;