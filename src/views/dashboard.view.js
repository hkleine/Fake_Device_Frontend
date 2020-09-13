import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../components/logout-button";
import {SideNav, Header, DashboardContent} from "../components";

function Dashboard() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated && (
        <div className="flex flex-row">
          <SideNav/>
          <div className="flex flex-col w-full h-screen">
            <Header user={user}/>
            <DashboardContent />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
