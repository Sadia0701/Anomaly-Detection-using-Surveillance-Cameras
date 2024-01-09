import React from "react";
//import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const LogoutButton = ({ setLoginUser,setIsLoggedIn }) => {
  const history = useHistory();

  const handleLogout = () => {
    setLoginUser({});
    history.push("/login"); 
    setIsLoggedIn(false)
  };

  return (

    <div className="logout">
       <button className="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
