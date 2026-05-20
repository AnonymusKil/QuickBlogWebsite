import { useState, useEffect } from "react";
import { supabase } from "../config/supabase";
import { assets } from "../assets/assets";
import LatestBlogsTable from "./LatestBlogsTable";
type comments = {
  id: number;
  name: string;
  commentcontent: string;
  created_at: string;
}
type Blog = {
  id: number;
  title: string;
  subtitle: string;
  uploadBlogFile: string;
  blogcategory: string;
};
function Dashboard() {
  const [drafts, setDrafts] = useState<Blog[]>([]);
  const [comments, setComments] = useState<comments[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: draftData } = await supabase
        .from("BlogTable")
        .select("*")
        .eq("publish", false);

      const { data: commentData } = await supabase
        .from("comment")
        .select("*");

      const { data: blogData } = await supabase
        .from("BlogTable")
        .select("*")
        .eq("publish", true);

      if (draftData) setDrafts(draftData);
      if (commentData) setComments(commentData);
      if (blogData) setBlogs(blogData);
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="flex flex-wrap gap-4">
        {/* BLOGS */}
        <div className="flex items-center bg-white p-4 min-w-58 rounded shadow gap-4">
          <img src={assets.dashboard_icon_1} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {blogs.length}
            </p>
            <p className="text-gray-400 font-light">Blogs</p>
          </div>
        </div>

        {/* COMMENTS */}
        <div className="flex items-center bg-white p-4 min-w-58 rounded shadow gap-4">
          <img src={assets.dashboard_icon_2} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {comments.length}
            </p>
            <p className="text-gray-400 font-light">Comments</p>
          </div>
        </div>

        {/* DRAFTS */}
        <div className="flex items-center bg-white p-4 min-w-58 rounded shadow gap-4">
          <img src={assets.dashboard_icon_3} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {drafts.length}
            </p>
            <p className="text-gray-400 font-light">Drafts</p>
          </div>
        </div>
      </div>

      <LatestBlogsTable />
    </section>
  );
}

export default Dashboard;