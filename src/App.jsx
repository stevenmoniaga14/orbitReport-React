import React, { useState } from "react";
import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import satData from "./components/satData";


function App() {

  const [sat, setSat] = useState(satData);

  
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  
  const filterByType = (currentType) => {
    const filteredSats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
      // filters satData to match currentType aka users' "onClick"
    });
    setSat(filteredSats); 
    // updates state with the selected orbit type, table component re-renders to display selected orbit
  };

  // defines the JSX that will be rendered on the page
return (
    <div>
      <Banner /> 
      <Buttons 
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}/>
      <Table 
      sat={sat}
      />
    </div>
  );
}

export default App;