import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/about/About";
import Contact from "./component/Contact/Contact";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <>
   
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;