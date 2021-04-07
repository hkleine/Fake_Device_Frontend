import React, { useState, useEffect } from "react";
import { RouteComponentProps } from 'react-router';
import {DashboardLayout} from "../layouts";
import { DeviceGrid, Loading, MenuHeading } from '../components';
import { useAuth0 } from "@auth0/auth0-react";
import { getDevices } from '../api';
import { Device } from '../types';
import { DevicesProvider } from "../context";

export function Dashboard(props: RouteComponentProps) {
  const [isLoading, setLoading] = useState(true);
  const { getAccessTokenSilently } = useAuth0();
  const [devices, setDevices] = useState<Device[]>();

  useEffect(() => {
    const fetchDevices = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      });
      try {
        const response = await getDevices(accessToken)
        setDevices(response.data);
        setLoading(false);
      } catch (error) {
        setDevices([]);
        setLoading(false);
        console.log(error);
      }
    }

    fetchDevices();
  }, [getAccessTokenSilently]);

  if (isLoading) {
    return (
      <Loading isLoading={isLoading}/>
    );
  }

  return (
    <div>
      <DashboardLayout>
        <div className="flex flex-col">
          <MenuHeading>Dashboard</MenuHeading>
          <DevicesProvider value={{devices: devices, setCurrentDevices: setDevices}}>
            <DeviceGrid  />
          </DevicesProvider>
        </div>
      </DashboardLayout>
  </div>
  );
}