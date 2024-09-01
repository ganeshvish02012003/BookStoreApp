import React from "react";
import Home from "./components/home/Home";

import { Route, Routes } from "react-router-dom";
import Courses from "./components/course/Courses";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
