import { FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { IconContext } from "react-icons/lib";
import { HttpMethods } from '../types';


export function ProtocolInputs({ device, protocol, register }: any) {
  const [showMqttPassword, setShowMqttPassword] = useState<boolean>(false)

  const handleClickShowPassword = () => {
    setShowMqttPassword(!showMqttPassword);
  };
  
  switch (protocol) {
    case 'mqtt':
      return (
        <div className="ml-12 w-3/6">
          <h2 className="text-gray-700 mb-4 text-xl font-medium col-span-2">Protocol Details</h2>
          <div className="grid grid-cols-2 gap-8">
            <TextField className="col-span-2" label="MQTT Host"  defaultValue={device.mqtt_host} {...register("mqtt_host")}/>
            <TextField className="col-span-2" label="MQTT Topic"  defaultValue={device.mqtt_topic} {...register("mqtt_topic")}/>
            <TextField label="MQTT Username"  defaultValue={device.mqtt_username} {...register("mqtt_username")}/>
            <TextField 
              label="MQTT Password" 
              type={showMqttPassword ? 'text' : 'password'}
              autoComplete 
              defaultValue={device.mqtt_password} 
              {...register("mqtt_password")}
              InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showMqttPassword ? 
                      <IconContext.Provider value={{ style: { fontSize: '20px' } }}>
                        <div className="text-gray-600">
                            <HiEye />
                        </div>
                      </IconContext.Provider> : 
                      <IconContext.Provider value={{ style: { fontSize: '20px' } }}>
                      <div className="text-gray-600">
                          <HiEyeOff />
                      </div>
                    </IconContext.Provider>
                    }
                  </IconButton>
                </InputAdornment>)
              }}
            />
          </div>
        </div>

      );
    case 'http':
      return (
        <div className="ml-12 w-3/6">
          <h2 className="text-gray-700 mb-4 text-xl font-medium">Protocol Details</h2>
          <div className="grid grid-cols-1 gap-8">
            <TextField label="HTTP Host" defaultValue={device.http_host} {...register("http_host")}/>

            <FormControl >
              <InputLabel>HTTP Method</InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                defaultValue={device.http_method}
                {...register("http_method")}
              >
                <MenuItem value={HttpMethods.POST}>POST</MenuItem>
                <MenuItem value={HttpMethods.PUT}>PUT</MenuItem>
                <MenuItem value={HttpMethods.PATCH}>PATCH</MenuItem>
              </Select>
            </FormControl>

            <TextField label="HTTP Auth Header"  defaultValue={""}/>
          </div>
        </div>

      );
    default:
      return null;
  }
}
