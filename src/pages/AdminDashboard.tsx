import { Outlet } from "react-router-dom"
import SideBar  from "../components/SideBar"
function AdminDashboard () {
return(
    <section className="bg-[#F6FAFE] font-Outfit flex">
        <SideBar/>
        <main className="flex-1 p-4 sm:p-6 lg:p-10">
            <Outlet/>

        </main>
    
    </section>
)
}
export default AdminDashboard