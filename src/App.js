import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Search from "./components/Search";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login">
        <Route index element={<Login />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
