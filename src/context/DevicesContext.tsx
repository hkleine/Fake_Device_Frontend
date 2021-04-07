import React, { Dispatch } from 'react'
import { Device } from '../types';

export interface IDevicesContext {
    devices: Device[] | undefined;
    setCurrentDevices: Dispatch<React.SetStateAction<Device[] | undefined>>;
}

export const DevicesContext = React.createContext<IDevicesContext>({ 
    devices: [] as Device[],
    setCurrentDevices: () => {}
});

export const DevicesProvider = ({ value, children }:any) => {
    return (
        <DevicesContext.Provider value={value}>
            {children}
        </DevicesContext.Provider>
    )
}
