import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import Home from './Home';
import Grid from './Grid';
import Toolbox from './Toolbox';
import Settings from './Settings';
import Navbar from './Navbar';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faFontAwesome)

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (pageLabel) => {
    setCurrentPage(pageLabel);
  };

  return (
    <div>
      { currentPage === "Home" && <Home/> }

      { currentPage === "Grid" && <Grid/> }

      { currentPage === "Toolbox" && <Toolbox/> }

      { currentPage === "Settings" && <Settings/> }

      <Navbar onPageChange={handlePageChange} />
    </div>

  );
};

export default App;
