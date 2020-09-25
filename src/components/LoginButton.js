import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect({ redirect_uri: 'http://localhost:3000/dashboard' })}
      variant="primary"
      className="btn-margin"
    >
      Log In
    </button>
  );
};

export default LoginButton;
