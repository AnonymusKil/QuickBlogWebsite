import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../config/supabase";
import type { User } from "@supabase/supabase-js";
import SideBar from "../components/SideBar";
function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        navigate("/adminLogin");
        return;
      }
      setUser(data.user);
      console.log(data.user);

      setLoading(false);
    };

    checkUser();
  }, [navigate]);
  if (loading) {
    return <h1>Loading Please wait...</h1>;
  }
  if (!user) return null;
  return (
    <section className="bg-[#F6FAFE] font-Outfit flex">
      {user ? (
        <>
          <SideBar />
          <main className="flex-1 p-4 sm:p-6 lg:p-10">
            <Outlet />
          </main>
        </>
      ) : (
        <h1 className="text-3xl">Kindly Login to view this page</h1>
      )}
    </section>
  );
}
export default AdminDashboard;
