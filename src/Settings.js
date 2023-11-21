import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Settings = ({ user, setUser }) => {
  const userContext = useContext(UserContext);
  const switchUserHandler = () => {
    if (user.id === 0) {
      setUser(userContext.users[1]);
    } else {
      setUser(userContext.users[0]);
    }
  };
  return (
    <div className="p-2">
      <h1>Settings</h1>
      <h2>
        Hi {user.sex === "m" ? "Elder" : "Sister"} {user.lastName}
      </h2>
      <button
        className="btn text-white bg-primary mb-5 me-1 position-absolute bottom-0 end-0"
        onClick={switchUserHandler}
      >
        Switch User
      </button>
    </div>
  );
};

export default Settings;
