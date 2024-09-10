import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Projects from "./pages/Projects";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App() {
  return (
    <BrowserRouter>
    {/*Adding Header inside BrowserRouter but outside Routes to make it available to all pages*/}
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Dashboard" element= {<Dashboard />} />
        <Route path="/sign-in" element={<Signin/>} />
        <Route path="/sign-up" element={<Signup/>} />
        <Route path="Projects" element={<Projects />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
