import axios from 'axios';


export default async function updateDevice(newDevice, accessToken) {
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