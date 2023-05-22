import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="dashboard" element={Dashboard} />
          <Route path="settings" element={Settings} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
