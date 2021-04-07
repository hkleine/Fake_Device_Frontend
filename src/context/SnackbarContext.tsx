import React, { Dispatch, useState } from 'react'
import { SnackbarComponent } from '../components';
import { Severity } from '../types';

interface ISnackbar {
    open: boolean;
    severity?: Severity;  
    text?: string
}

export const SnackbarContext = React.createContext<Dispatch<React.SetStateAction<ISnackbar>>>(() => {});

export const SnackbarProvider = ({children }:any) => {
    const [snackbarState, setSnackbarState] = useState<ISnackbar>({open: false, severity: Severity.INFO, text: ''})

    return (
        <SnackbarContext.Provider value={setSnackbarState}>
            {children}
            <SnackbarComponent open={snackbarState.open} setOpen={setSnackbarState} severity={snackbarState.severity}>
                {snackbarState.text}
            </SnackbarComponent>
        </SnackbarContext.Provider>
    )
}
