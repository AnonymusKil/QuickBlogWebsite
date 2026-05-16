import { assets } from "../assets/assets";
import BlogTable from "./BlogTable";
function LatestBlogsTable() {
  return (
    <section>
      <div className="flex mt-6 m-4 gap-3 text-gray-600 items-center">
        <img src={assets.dashboard_icon_4} alt="" />
        <p>Latest Blogs</p>
      </div>

      <div className="bg-white rounded-lg shadow scrollbar-hide">
        <BlogTable/>
        
      </div>
    </section>
  );
}

export default LatestBlogsTable;
