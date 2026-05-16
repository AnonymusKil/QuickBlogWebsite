import { assets, dashboard_data } from "../assets/assets";
import LatestBlogsTable from "./LatestBlogsTable";
function Dashboard() {
  return (
    <section className=" ">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all gap-4">
          <img src={assets.dashboard_icon_1} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboard_data.blogs}
            </p>
            <p className="text-gray-400 font-light">Blogs</p>
          </div>
        </div>

        <div className="flex items-center bg-white p-4 min-w-58 rounded shadow cursor-pointer  hover:scale-105 transition-all gap-4">
          <img src={assets.dashboard_icon_2} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboard_data.comments}
            </p>
            <p className="text-gray-400 font-light">comments</p>
          </div>
        </div>

        <div className="flex items-center bg-white p-4 min-w-58 rounded shadow cursor-pointer  hover:scale-105 transition-all gap-4">
          <img src={assets.dashboard_icon_3} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboard_data.drafts}
            </p>
            <p className="text-gray-400 font-light">draft</p>
          </div>
        </div>
      </div>
      <LatestBlogsTable/>
    </section>
  );
}

export default Dashboard;
