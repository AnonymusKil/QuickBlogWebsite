import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

function NavBar() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/adminDashboard")
  return (
    <header
      className={`flex justify-between items-center px-4 py-4 sm:px-8 lg:px-20 ${isDashboard ? "bg-white border-b border-gray-200 sticky top-0 z-50" : ""}`}
    >
      <Link to="/">
        <img src={logo} className="w-32" alt="logo" />
      </Link>
      <Link
        to="/adminLogin"
        className="bg-[#5044e5] text-white rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2 hover:bg-secondary/90 transition"
      >
        {isDashboard ? "Logout" : "Admin Login"}
        <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </header>
  );
}

export default NavBar;
