import axios from 'axios';
import { Device } from '../types';

export async function updateDevice(newDevice: Device, accessToken: string) {
    if(newDevice.interval) newDevice.interval = `PT${newDevice.interval}S`;
      const response = await axios({
        method: 'patch',
        url: `${process.env.REACT_APP_API}/api/device/${newDevice._id}/`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: newDevice,
      });

      return response;  
  };