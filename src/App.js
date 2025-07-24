import "./App.css";
import Addproject from "./components/Addproject";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProject from "./components/AllProject";
import LoginPage from "./Login/Login";
import DashboardPage from "./components/DashboardPage";

function App() {
  return (
    <div>
      {/* <Addproject /> */}
      {/* <AllProject /> */}
      {/* <DashboardPage /> */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/add-project" element={<Addproject />} />
          <Route path="/all-projects" element={<AllProject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
