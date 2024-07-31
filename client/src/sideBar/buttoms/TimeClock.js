// TimeClockButton.js
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';






const TimeClock = () => {
    
  const location = useLocation();
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (location.pathname === '/timeclock' && !mapLoaded) {
      initMap();
    }
  }, [location, mapLoaded]);

  async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    const map = new Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
    setMapLoaded(true);
  }

  return (
    <>
      <li>
        <Link to="/timeclock" className="side-buttons">
          TimeClockkjkj
        </Link>
      </li>
      {location.pathname === '/timeclock' && (
        <div id="map" style={{ height: '500px', width: '100%' }}></div>
      )}
    </>
  );
};

export default TimeClock;
