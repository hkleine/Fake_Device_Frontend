import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Toggle from 'react-toggle';
import { toggleDevice } from '../api'
import { SnackbarContext } from "../context";
import { Severity } from '../types';


export const DeviceToggleButton = ({device, setDevice}: any) => {
    const { getAccessTokenSilently } = useAuth0();
    const openSnackbar = useContext(SnackbarContext)

    async function handleToggleDevice() {
        const accessToken = await getAccessTokenSilently({
            audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        });
        try {
            const response = await toggleDevice(device._id, accessToken)
            setDevice(response.data);
            if(response.data.is_running) {
                openSnackbar({open: true, severity: Severity.INFO, text: 'started device'});
            } else {
                openSnackbar({open: true, severity: Severity.INFO, text: 'stopped device'});
            }
        } catch (error) {
            openSnackbar({open: true, severity: Severity.ERROR, text: 'failed to toggle device'});
        }

    }

    return (
        <Toggle
            className="toggle w-8"
            onChange={handleToggleDevice}
            defaultChecked={device.is_running}
            icons={false}
        />
    );
};