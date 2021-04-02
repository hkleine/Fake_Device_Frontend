import { User } from '@auth0/auth0-react/dist/auth-state';
import React from 'react'


export const UserContext = React.createContext<User>({});

export const UserProvider = ({ user, children }:any) => {
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}