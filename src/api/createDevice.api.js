import axios from 'axios';


export default async function createDevice(newDevice, accessToken) {
    return await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API}/api/device/create`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: newDevice
    });
  };