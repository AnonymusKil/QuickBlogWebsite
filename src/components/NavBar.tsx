import { useEffect, useState } from "react";
import { supabase } from "../config/supabase";
import type { User } from "@supabase/supabase-js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

function NavBar() {
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboard = location.pathname.startsWith("/adminDashboard");
  const logOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert(error.message);
      return;
    }
    navigate("/");
  };

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    checkUser();
  }, []);
  return (
    <header
      className={`flex justify-between items-center px-4 py-4 sm:px-8 lg:px-20 ${isDashboard ? "bg-white border-b border-gray-200 sticky top-0 z-50" : ""}`}
    >
      <Link to="/">
        <img src={logo} className="w-32" alt="logo" />
      </Link>

      {user ? (
        isDashboard ? (
          <button
            onClick={logOut}
            className="bg-[#5044e5] text-white rounded-full px-4 py-2 text-sm font-semibold"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/adminDashboard"
            className="bg-[#5044e5] text-white rounded-full px-4 py-2 text-sm font-semibold"
          >
            Dashboard
          </Link>
        )
      ) : (
        <Link
          to="/adminLogin"
          className="bg-[#5044e5] text-white rounded-full px-4 py-2 text-sm font-semibold"
        >
          Admin Login
        </Link>
      )}
    </header>
  );
}

export default NavBar;
