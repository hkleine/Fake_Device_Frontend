import axios from 'axios';

export default async function getDevice(deviceId, accessToken) {
    const response = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API}/api/device/${deviceId}/`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response
};