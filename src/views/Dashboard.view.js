import React, { useState, useEffect } from "react";
import {DashboardLayout} from "../layouts";
import { SensorGrid, Loading, SnackbarComponent } from '../components';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { remove } from 'lodash';
import { getDevices } from '../api';

function Dashboard(props  ) {
  const [isLoading, setLoading] = useState(true);
  const { user, getAccessTokenSilently } = useAuth0();
  const [sensors, setSensors] = useState();
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  function updateSensors(updatedSensor) {
    setSensors([]);
    remove(sensors, function (s) {
      return s._id === updatedSensor._id;
    });
    setSensors(sensors)
  }

  useEffect(() => {
    console.log(props.location.state);
    if(props.location.state && props.location.state.deviceCreationSucceeded) {
      setOpenSuccess(true);
      window.history.replaceState(null, '');
    } else if (props.location.state && props.location.state.deviceCreationSucceeded === false) {
      setOpenError(true);
      window.history.replaceState(null, '');
    }

    // mzss noch ersetzt werden durch api function
    const getDevices = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        });
        const response = await axios({ method: 'get', url: `${process.env.REACT_APP_API}/api/user/${user.sub}/devices/`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setSensors(response.data);
        setLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    getDevices();
  }, []);

  if (isLoading) {
    return (
      <Loading isLoading={isLoading}/>
    );
  }

  return (
    <div>
      <DashboardLayout>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <h1 className="text-gray-700 text-2xl font-medium pb-12">Dashboard</h1>
          </div>
          <SensorGrid sensors={sensors} updateSensors={updateSensors} />
        </div>
      </DashboardLayout>
      <SnackbarComponent open={openSuccess} setOpen={setOpenSuccess} severity={'success'}>
        Successfully created Device
      </SnackbarComponent>
      <SnackbarComponent open={openError} setOpen={setOpenError} severity={'error'}>
        Failed to create Device
      </SnackbarComponent>
  </div>
  );
}

export default Dashboard;
