import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Intake from "./components/intake/Intake";
import Est from "./components/Est/Est";
import Enf from "./components/Enf/Enf";
import Mod from "./components/Mod/Mod";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/intake" element={<Intake />} />
          <Route path="/est" element={<Est />} />
          <Route path="/enf" element={<Enf />} />
          <Route path="/mod" element={<Mod />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
