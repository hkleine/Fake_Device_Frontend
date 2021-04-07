import moment from "moment";
import { Device, Protocols, Severity } from "../types";
import { updateDevice } from '../api';
import { useContext, useState } from "react";
import { SnackbarContext } from "../context";
import { useForm } from "react-hook-form";
import { useAuth0 } from "@auth0/auth0-react";
import { Divider, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { DeviceToggleButton } from "./DeviceToggleButton";
import { ProtocolInputs } from "./ProtocolInputs";

export const EditForm = ({device, setDevice}: any) => {
    const { getAccessTokenSilently } = useAuth0();
    const openSnackbar = useContext(SnackbarContext)
    const [protocol, setProtocol] = useState<Protocols>(device.protocol);
    const { handleSubmit, register } = useForm<Device>();

    const getAccessToken = async () => {
        return await getAccessTokenSilently({
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        });
    }

    const intervalAsSeconds = (interval: string) => {
        return moment.duration(interval).asSeconds();
    };

    const onSubmit = async (data:Device) => {
      console.log(data);
        try {
          const newDevice = await updateDevice({...data, _id: device._id}, await getAccessToken());
          setDevice(newDevice.data);
          openSnackbar({open: true, severity: Severity.SUCCESS, text: 'successfully updated device'});
        } catch (error) {
          openSnackbar({open: true, severity: Severity.ERROR, text: 'could not update device'});
        }
    };

    
    return (
      
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <DeviceToggleButton device={device} setDevice={setDevice} />
          <div className="flex flex-row my-8">
            <div className="mr-12 w-3/6">
            <h2 className="text-gray-700 mb-4 text-xl font-medium">Device Settings</h2>
            <div className="grid grid-cols-1 gap-8">
              <TextField label="Name" defaultValue={device.name} {...register("name")}/>
              <FormControl>
                <InputLabel>Protocol</InputLabel>
                  <Select
                    demo-simple-select-outlined-label
                    defaultValue={device.protocol}
                    {...register("protocol")}
                    onChange={e => {
                      setProtocol(e.target.value as Protocols)
                    }}
                  >
                    <MenuItem value={Protocols.HTTP}>HTTP</MenuItem>
                    <MenuItem value={Protocols.MQTT}>MQTT</MenuItem>
                </Select>
              </FormControl>
              <TextField inputProps={{ type: 'number'}} label="Interval" defaultValue={intervalAsSeconds(device.interval)} {...register("interval")}/>
            </div>
            </div>

            <Divider  orientation="vertical" flexItem />
            <ProtocolInputs device={device} protocol={protocol} register={register} />
          </div>
          


        <div className="flex flex-row justify-end">
          <NavLink
            to="/"
            className="bg-white mr-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            type="submit"
          >
            cancel
          </NavLink>
          <button
            className="bg-primary hover:bg-purple-700 text-white font-bold py-2 px-10 rounded shadow"
            type="submit"
          >
            save
          </button>
        </div>
      </form>
    );
}