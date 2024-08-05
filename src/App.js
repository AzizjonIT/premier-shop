import React from "react";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Buy from "./Pages/Buy/Buy";
import User_name from "./Pages/User_name/User_name";
import User_name_up from "./Pages/User_name_up/User_name_up";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<User_name />} />
        <Route path="/User_name_up" element={<User_name_up />} />
        <Route path="/:userId/Home" element={<Home />} />
        <Route path="/:userId/products/:productId" element={<Buy />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
