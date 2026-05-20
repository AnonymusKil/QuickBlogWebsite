import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
function SideBar() {
  
  return (
    <aside className="bg-white w-64 min-h-screen border-r border-gray-200 p-5 hidden md:block">
      <div className="flex flex-col gap-2 text-[15px] font-medium">
        <NavLink
          to="/adminDashboard"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 w-full min-w-52 ${isActive ? "bg-[#F2F3FF] border-r-4 border-secondary text-secondary" : ""}`
          }
        >
          <img src={assets.home_icon} alt="" className="w-5 h-5" />
          Dashboard
        </NavLink>

        <NavLink
          to="/adminDashboard/addBlog"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 ${isActive ? "bg-[#F2F3FF] border-r-4 border-secondary text-secondary" : ""}`
          }
        >
          <img src={assets.add_icon} className="w-5 h-5" alt="" />
          Add Blog
        </NavLink>

        <NavLink
          to="/adminDashboard/blogList"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 ${isActive ? "bg-[#F2F3FF] border-r-4 border-secondary text-secondary" : ""}`
          }
        >
          <img src={assets.list_icon} className="w-5 h-5" alt="" />
          Blog List
        </NavLink>

        <NavLink
          to="/adminDashboard/comments"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 ${isActive ? "bg-[#F2F3FF] border-r-4 border-secondary text-secondary " : ""}`
          }
        >
          <img src={assets.comment_icon} className="w-5 h-5" alt="" />
          Comments
        </NavLink>
      </div>
    </aside>
  );
}

export default SideBar;
