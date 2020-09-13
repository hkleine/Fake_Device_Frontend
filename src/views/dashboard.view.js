import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../components/logout-button"

function Dashboard() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      {isAuthenticated && (
        <div>
          <img
            src={user.picture}
            alt="Profile"
            className="nav-user-profile rounded-circle"
            width="50"
          />
          <p>{user.name}</p>
        </div>
      )}
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      <LogoutButton />
    </div>
  );
}

export default Dashboard;
