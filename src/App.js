import React, { useContext, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import Home from "./Home";
import Grid from "./Grid";
import Toolbox from "./Toolbox";
import Settings from "./Settings";
import Navbar from "./Navbar";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import Header from "./components/Header";
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
      <div className="mb-5">
        <Header currentPage={currentPage} onPageChange={handlePageChange} />
        {currentPage === "Home" && <Home user={user} setUser={setUser} />}

        {currentPage === "Grid" && <Grid user={user} setUser={setUser} />}

        {currentPage === "Toolbox" && <Toolbox user={user} setUser={setUser} />}

        {currentPage === "Settings" && <Settings user={user} setUser={setUser} />}
      </div>
      <Navbar onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
