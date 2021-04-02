import React, { useContext } from "react";
import {SideNav, Header, DashboardContent} from "../components";

export const DashboardLayout = ({children}: any) => {

  return (
    <div>
      <div className="flex flex-row h-screen overflow-y-hidden overflow-x-hidden">
        <SideNav/>
        <div className="flex flex-col w-full h-screen overflow-y-auto overflow-x-hidden">
          <Header/>
          <DashboardContent> 
            {children}
          </DashboardContent>
        </div>
      </div>
    </div>
  );
}