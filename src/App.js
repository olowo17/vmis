import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Admin from "./pages/Admin";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import DistressCall from "./pages/DistressCall";
import UserDashBoard from "./pages/UserDashBoard";
import AdminLogin from "./pages/AdminLogin";
import UserManagement from "./pages/UserManagement";
import Settings from "./pages/Settings";
import VehicleDatabase from "./pages/VehicleDatabase";
import Reports from "./pages/Reports";
import Register from "./pages/Register";
import RegisterCar from "./pages/RegisterCar";
import ReportIncident from "./pages/ReportIncident";


function App() {
  return (
    <div className="">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/adminLogin" element={<AdminLogin/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/userDashboard" element={<UserDashBoard/>} />
        <Route path="/userManagement" element={<UserManagement/>} />
        <Route path="/incidentReport" element={<ReportIncident/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/database" element={<VehicleDatabase/>} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/distress" element={<DistressCall/>} />
        <Route path="/registerCar" element={<RegisterCar/>} />
        <Route path="/*" element={<h1 className="text-5xl min-h-screen text-center font-bold"> No Page Found</h1>} />
      </Routes>
      <Footer/>
    </Router>
  </div>
  );
}

export default App;
