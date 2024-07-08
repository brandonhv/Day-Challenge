// import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home"
import Archive from "./pages/Archive"
import Projects from "./pages/Projects"
import Scheduale from "./pages/Scheduale"


// import style from "./App.css"

function App () {

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/scheduale" element={<Scheduale />} />
          <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;