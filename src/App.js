import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Style.css';
import NavBar from './components/Navbar';
import Home from "./components/Home";
// import About from "./components/About";
import Services from './components/Services';
import Form from './components/Form';
//import Container from "react-bootstrap/Container"; // Import Container from react-bootstrap

function App() {
  return (
    <Router>
      <NavBar />
      <div className="app-container">
        <div className="app-container2" style={{ paddingTop: '0px' }}>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/Form" element={<Form />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
