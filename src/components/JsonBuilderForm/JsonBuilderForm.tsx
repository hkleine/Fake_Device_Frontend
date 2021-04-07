import React, { useState } from "react"
import { HiOutlinePlus } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import { KeyValueInput } from './KeyValueInput'
import { JsonBuilderViewer } from "./JsonViewer";

export const JsonBuilderForm = ({device, setDevice}:any) => {
    const [data, setData] = useState(device.data || {});

    const addNewKeyValuePairs = () => {
        const newData:any = {}
        newData[""] = ""
        setData({...data, ...newData})
    }

    const updateObjKey = (oldKey: string, value: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
        delete data[oldKey]
        data[event.target.value] = value;
        setData({...data});
    }

    const deleteProperty = (keyToDelete: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        delete data[keyToDelete]
        setData({...data});
    }

    const updateValue = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        data[key] = event.target.value;
        setData({...data});
    }

    const keyValueInputs = []

    for (const [key, value] of Object.entries(data)) {
        keyValueInputs.push(<KeyValueInput objKey={key} updateObjKey={updateObjKey} deleteProperty={deleteProperty} value={value} updateValue={updateValue} type={typeof value} />)
    }

    return (
        <div>
            <JsonBuilderViewer data={data} />
            <div className="grid grid-cols-1 gap-4 mt-8">
                {keyValueInputs}
                <button onClick={addNewKeyValuePairs} className="w-24 bg-primary hover:bg-purple-700 text-white font-bold py-2 px-6 rounded shadow flex flex-row" type="submit">
                    <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                        <div className="m-auto">
                            <HiOutlinePlus />
                        </div>
                    </IconContext.Provider>
                    add
                </button>
            </div>
        </div>
        
    );
}
