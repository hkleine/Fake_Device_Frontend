import axios from 'axios';

export default async function getLogs(deviceId, accessToken) {
      const response = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API}/api/device/${deviceId}/logs`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data.reverse();
  };