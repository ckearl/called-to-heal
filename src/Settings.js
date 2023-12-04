import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { AreaContext } from "./AreaContext";

const Settings = ({ user, setUser }) => {
  const userContext = useContext(UserContext);
  const switchUserHandler = () => {
    if (user.id === 0) {
      setUser(userContext.users[1]);
    } else {
      setUser(userContext.users[0]);
    }
  };

  const areaContext = useContext(AreaContext);

  const areaChangeHandler = (event) => {
    event.preventDefault();
    setUser({
      ...user,
      settings: {
        ...user.settings,
        area: event.target[0].value,
      },
    });
  };

  const companionChangeHandler = (event) => {
    event.preventDefault();
    setUser({
      ...user,
      settings: {
        ...user.settings,
        companion: event.target[0].value,
      },
    });
  };

  return (
    <div className="p-2">
      <h1>
        Hi {user.sex === "m" ? "Elder" : "Sister"} {user.lastName}
      </h1>
      <h5>{user.settings.homeTown}</h5>
      <hr />
      <h3>Area: {user.settings.area}</h3>
      <form onSubmit={areaChangeHandler}>
        <select className="form-select" aria-label="Default select example">
          <option className="">Change Area</option>
          {areaContext.missions[user.mission].areas.map((area) => {
            return (
              <option key={area} value={area}>
                {area}
              </option>
            );
          })}
        </select>
        <input type="submit" className="btn btn-primary my-1" />
      </form>
      <h3>Companion: {user.settings.companion}</h3>
      <form onSubmit={companionChangeHandler}>
        <input placeholder="Change Companion" type="text" className="form-control" />
        <input type="submit" className="btn btn-primary my-1" />
      </form>

      <button className="btn btn-outline-primary mt-2" onClick={switchUserHandler}>
        Switch User
      </button>
    </div>
  );
};

export default Settings;
