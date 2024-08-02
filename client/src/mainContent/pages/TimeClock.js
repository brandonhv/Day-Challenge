import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const TimeClock = () => {

  const mapRef = useRef(null); // Reference to the DOM element for the map

  // should i have an array of objects, that is updated with a hook
    // and whenever we edit, and click on it, we are refering to that GEO fence in particular


  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_CALL,
      version: "weekly",
    });

    const initializeMap = async () => {
      try {
        const google = await loader.load();

        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 40.87420997197665, lng: -74.04980768292904 },
          zoom: 15,
        });

        const bounds = {

            north: 40.8855791160301,
            south: 40.88257956306283,
            east: -74.05487936610284,
            west: -74.05787936610282
          };
          // Define a rectangle and set its editable property to true.
          const rectangle = new google.maps.Rectangle({
            bounds: bounds,
            editable: true,
            draggable: true,
          });
    
            rectangle.setMap(map);

            ["dragstart", "dragend"].forEach((eventName) => {
                rectangle.addListener(eventName, () => {
                  console.log({ bounds: rectangle.getBounds()?.toJSON(), eventName });
                });
              });

            // console.log('This is Rectangle: ', rectangle)

      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    initializeMap();
  }, []);

  return (
    <div>
      <h1>TimeClock</h1>
      <div ref={mapRef} style={{ height: '680px', width: '100%' }}></div>
    </div>
  );
};

export default TimeClock;


// import React, { useEffect, useRef } from "react";
// import { Loader } from "@googlemaps/js-api-loader";

// const TimeClock: React.FC = () => {
//   const mapRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const loader = new Loader({
//       apiKey: process.env.REACT_APP_GOOGLE_MAPS_CALL,
//       version: "weekly",
//     });

//     const initializeMap = async () => {
//       try {
//         const google = await loader.load();

//         if (mapRef.current) {
//           const map = new google.maps.Map(mapRef.current, {
//             center: { lat: 40.87420997197665, lng: -74.04980768292904 },
//             zoom: 11,
//           });

//           const bounds = {
//             north: 44.599,
//             south: 44.49,
//             east: -78.443,
//             west: -78.649,
//           };

//           // Define a rectangle and set its editable property to true.
//           const rectangle = new google.maps.Rectangle({
//             bounds: bounds,
//             editable: true,
//             draggable: true,
//           });

//           rectangle.setMap(map);

//           // Listen to changes
//           ["bounds_changed", "dragstart", "drag", "dragend"].forEach((eventName) => {
//             rectangle.addListener(eventName, () => {
//               console.log({ bounds: rectangle.getBounds()?.toJSON(), eventName });
//             });
//           });
//         }
//       } catch (error) {
//         console.error("Error loading Google Maps:", error);
//       }
//     };

//     initializeMap();
//   }, []);

//   return (
//     <div>
//       <h1>TimeClock</h1>
//       <div ref={mapRef} style={{ height: '680px', width: '100%' }}></div>
//     </div>
//   );
// };

// export default TimeClock;










