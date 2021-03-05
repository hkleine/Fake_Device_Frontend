import axios from 'axios';


export default async function getDevices(userSub, accessToken) {
  const response = await axios({ method: 'get', url: `${process.env.REACT_APP_API}/api/user/${userSub}/devices/`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
  };