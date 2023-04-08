import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/about/About";
import Contact from "./component/Contact/Contact";
import Footer from "./component/footer/Footer";
import Question from "./component/Question/Question";
import PuffLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";
import { FaCentercode } from "react-icons/fa";
import Navbar from "./component/Navbar/Navbar";
import useStartupCtx from "./component/Hooks/useContext";
import { Privacy } from "./component/Privacy/Privacy";
import Terms from "./component/Terms/Terms";
function App() {
  const { loading } = useStartupCtx();

  return (
    <>
      <Router>
        <Navbar />
        {loading ? (
          <div className="preloader">
            <PuffLoader color={"#ff9800"} loading={loading} size={40} />
          </div>
        ) : (
          ""
        )}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Privacy" element={<Privacy></Privacy>} />
          <Route path="/Terms" element={<Terms />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
