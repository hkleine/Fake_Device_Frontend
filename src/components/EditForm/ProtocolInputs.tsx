import { FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { IconContext } from "react-icons/lib";
import { HttpMethods, Protocols } from '../../types';


export function ProtocolInputs({ formValues, handleChange }: any) {
  const [showMqttPassword, setShowMqttPassword] = useState<boolean>(false)

  const handleClickShowPassword = () => {
    setShowMqttPassword(!showMqttPassword);
  };

  const RenderSwitch = () => {
    if(formValues.protocol === Protocols.MQTT) {
      return(
        <div>
        <h3 className="mb-4 col-span-2">Protocol Details</h3>
        <div className="grid grid-cols-2 gap-8">
          <TextField
            name="mqtt_host"
            id="mqtt-host-input"
            label="MQTT Host" 
            className="col-span-2"
            value={formValues.mqtt_host}
            onChange={handleChange}
          />

          <TextField
            name="mqtt_topic"
            value={formValues.mqtt_topic}
            label="MQTT Topic" 
            className="col-span-2"
            onChange={handleChange}
          />

          <TextField
            name="mqtt_username"
            value={formValues.mqtt_username}
            label="MQTT Username"
            onChange={handleChange} 
          />

          <TextField 
            label="MQTT Password" 
            name="mqtt_password"
            type={showMqttPassword ? 'text' : 'password'}
            onChange={handleChange}
            value={formValues.mqtt_password}
            InputProps={{
              endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showMqttPassword ? 
                    <IconContext.Provider value={{ style: { fontSize: '20px' } }}>
                      <div className="text-gray-500">
                          <HiEye />
                      </div>
                    </IconContext.Provider> : 
                    <IconContext.Provider value={{ style: { fontSize: '20px' } }}>
                    <div className="text-gray-500">
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
      )
    } 
    if(formValues.protocol === Protocols.HTTP) {
      return(
      <div>
        <h3 className="mb-4 col-span-2">Protocol Details</h3>
        <div className="grid grid-cols-1 gap-8">
          {/* HTTP HOST INPUT  */}
          <TextField
            name="http_host"
            id="http-host-input"
            value={formValues.http_host}
            label="HTTP Host"
            onChange={handleChange} 
          />


          {/* HTTP METHOD INPUT  */}
          
              <FormControl >
                <InputLabel>HTTP Method</InputLabel>
                <Select
                  name="http_method"
                  value={formValues.http_method ? formValues.http_method : HttpMethods.POST}
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  onChange={handleChange}
                >
                  <MenuItem value={HttpMethods.POST}>POST</MenuItem>
                  <MenuItem value={HttpMethods.PUT}>PUT</MenuItem>
                  <MenuItem value={HttpMethods.PATCH}>PATCH</MenuItem>
                </Select>
              </FormControl>

          
          {/* HTTP AUTH HEADER INPUT  */}
          {/* <Controller
              control={control}
              name="http_host"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <TextField
                  onBlur={onBlur}
                  onChange={onChange}
                  inputRef={ref}
                  value={device.http_host}
                  label="HTTP Auth Header" 
                />
              )}
          /> */}
        </div>
      </div>
      )
      
    }
  }
  
  return (
    formValues ?
      <div className="ml-12 w-3/6">{RenderSwitch()}</div>
    : null
  );
}
