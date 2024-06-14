import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import LoginPage from "./Components/Pages/Login";
import Delivery from "./Components/Pages/Delivery";
import "./index.css";
//@yangomes010, desafio Pigz janeiro 2023
function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/pigz" element={<LoginPage />} />
          <Route path="/pigz/dashboard" element={<Dashboard />} />
          <Route path="/pigz/delivery" element={<Delivery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
