import { FormControl, Grid, MenuItem, Select, TextField } from "@material-ui/core";
import { HiOutlineTrash } from "react-icons/hi";
import { IconContext } from "react-icons/lib";

export const KeyValueInput = ({objKey, updateObjKey, deleteProperty, value, updateValue, type}:any) => {

    return (
        <Grid className="grid grid-rows-1 grid-flow-col gap-4">
            <TextField defaultValue={objKey} onChange={updateObjKey(objKey, value)} label="Key" variant="outlined" />
            <FormControl variant="outlined">
                <Select
                    defaultValue={type}
                >
                    <MenuItem value={"string"}>String</MenuItem>
                    <MenuItem value={"number"}>Number</MenuItem>
                    <MenuItem value={"boolean"}>Boolean</MenuItem>
                    <MenuItem value={"timestamp"}>Timestamp</MenuItem>
                    <MenuItem value={"object"}>Object</MenuItem>
                    <MenuItem value={"array"}>Array</MenuItem>
                    <MenuItem value={"danymicValue"}>DynamicValue</MenuItem>
                </Select>
            </FormControl>
            
            <TextField defaultValue={value} onChange={updateValue(objKey)} label="Value" variant="outlined" />

            <button className="outline-none pb-2" onClick={deleteProperty(objKey)}>
                <IconContext.Provider value={{ style: { fontSize: '20px' } }}>
                    <div className="text-gray-600 hover:text-purple-700">
                        <HiOutlineTrash />
                    </div>
                </IconContext.Provider>
            </button>
        </Grid>  
    );
}