import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";
import HeaderComponent from "../components/HeaderComponent";
import CreateUser from "../pages/CreateUser";
import UpdateUser from "../pages/UpdateUser";
import Fibonacci from "../pages/Fibonacci";
import Collatz from "../pages/Collatz";

const ApplicationRoutes = () => {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Navigate to="/list" />} />
        <Route path="/list" element={<Home />} />
        <Route path="/list/create" element={<CreateUser />} />
        <Route path="/list/update/:id" element={<UpdateUser />} />
        <Route path="/fibonacci" element={<Fibonacci />} />
        <Route path="/collatz" element={<Collatz />} />
      </Routes>
    </Router>
  );
};

export default ApplicationRoutes;
