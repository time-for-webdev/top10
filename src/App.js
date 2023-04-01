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
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {document.body.style.overflow = 'hidden';
    setTimeout(() => { setLoading(false);document.body.style.overflow = 'visible'; }, 3000)
  }
    , []);
  return (
    <>

      <Router>
        {loading ?
          <div className="preloader"><PuffLoader color={"#ff9800"}
            loading={loading}
            size={40}
          /></div> : ""}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;