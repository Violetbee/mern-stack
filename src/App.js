import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Register, Error, Landing } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
