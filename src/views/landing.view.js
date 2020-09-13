import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "../components/login-button"

function Landing() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Landing Page</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      <LoginButton />
    </div>
  );
}

export default Landing;
