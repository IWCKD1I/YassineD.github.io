import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Timeline from "./components/Timeline"; // import Contact component
import Navbar from "./components/Navbar"; // import Navbar if you have it
import Home from "./components/Home"; // import Navbar if you have it

function App() {
  return (
    <Router>
      <Navbar /> {/* Your navbar should stay on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </Router>
  );
}

export default App;
