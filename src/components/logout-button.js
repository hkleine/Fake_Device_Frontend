import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      variant="danger"
      className="block text-left px-4 w-full py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
