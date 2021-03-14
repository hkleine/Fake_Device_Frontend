import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Toggle from 'react-toggle';

const DeviceToggleButton = ({device, setDevice}) => {
    const { getAccessTokenSilently } = useAuth0();

    async function toggleDevice() {
        const accessToken = await getAccessTokenSilently({
            audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        });
        axios({ method: 'get', url: `${process.env.REACT_APP_API}/api/device/${device._id}/toggle`, headers: {Authorization: `Bearer ${accessToken}`,} })
        .then(response => {
            setDevice(response.data);
        });
    }

    return (
        <label>
            <Toggle
                className="toggle"
                onChange={toggleDevice}
                defaultChecked={device.is_running}
                icons={false} />
        </label>
    );
};

export default DeviceToggleButton;