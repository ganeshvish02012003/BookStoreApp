import React from "react";
import Home from "./components/home/Home";

import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./components/course/Courses";
import Signup from "./components/Signup";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./components/context/Authprovider";

const App = () => {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser? <Courses />:<Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster/>
    </>
  );
};

export default App;
