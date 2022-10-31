import React, { useState, useEffect } from "react";
import './assets/global.css';

// Import Features 
import Map from './Features/MapFeature/Map'

// Import Functions 
import { loadMapApi } from "./Functions/MapFeature/loadMapApi";

function App() {
  const [googleScriptLoaded, setGoogleScriptLoaded] = useState(false);

  useEffect(()=>{
    
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener('load', function () {
      setGoogleScriptLoaded(true);
    });
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <nav><h1>Medicine App 2.0</h1></nav>
      </header>
      {googleScriptLoaded &&
        <Map 
          mapType={google.maps.MapTypeId.ROADMAP}
          mapTypeControl={true}
        />
        
      }
    </div>
  );
}

export default App;
