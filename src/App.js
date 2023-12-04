import React, { useContext, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";

import Home from "./Home";
import Grid from "./Grid";
import Toolbox from "./Toolbox";
import Settings from "./Settings";
import Navbar from "./Navbar";
import { UserContext } from "./UserContext";
import "./App.css";

library.add(fas, faFontAwesome);

const App = () => {
  const userContext = useContext(UserContext);
  const [user, setUser] = useState(userContext.users[0]);

  const [currentPage, setCurrentPage] = useState("Home");

  document.title = `Called to Heal - ${currentPage}`;
  const handlePageChange = (pageLabel) => {
    setCurrentPage(pageLabel);
  };

  return (
    <div>
      <div className="">
        {currentPage === "Home" && <Home user={user} setUser={setUser} />}

        {currentPage === "Grid" && <Grid user={user} setUser={setUser} />}

        {currentPage === "Toolbox" && <Toolbox user={user} setUser={setUser} />}

        {currentPage === "Settings" && <Settings user={user} setUser={setUser} />}
        <div style={{ height: 100 }} />
      </div>
      <Navbar onPageChange={handlePageChange} currentPage={currentPage} />
    </div>
  );
};

export default App;
