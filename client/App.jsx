import React, { useEffect, useState } from "react"; 

const App = () => {


    const [backendData, setBackendData] = useState([{ }])

    useEffect(() => {

        fetch("/names")
        .then(response => response.json())
        .then(data => setBackendData(data))


    },[]);

    return (

        <div>

        </div>

    );

};