import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";


const TimeClock = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_CALL,
      version: "weekly",
    });

    const initializeMap = async () => {
      try {
        const google = await loader.load(); // Correctly load the Google Maps API

        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 40.87420997197665, lng: -74.04980768292904 },   
          zoom: 11,
        });
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    initializeMap();
  }, []);


  return (
    <div>
      <h1>TimeClock</h1>
      <div id="map" ref={mapRef} style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
};

export default TimeClock;







