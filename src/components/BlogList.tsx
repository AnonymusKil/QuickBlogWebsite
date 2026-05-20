import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../config/supabase.ts";
type Blog = {
  id: number;
  title: string;
  subtitle: string;
  uploadBlogFile: string;
  blogcategory: string;
};
function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data: fetchedBlogs, error: fetchError } = await supabase
        .from("BlogTable")
        .select("*");
      if (fetchError) {
        console.log(fetchError);
        return;
      }
      if (fetchedBlogs) {
        setBlogs(fetchedBlogs);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <section className="px-5 lg:max-w-[80%] mx-auto mt-10 font-Outfit">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <Link
            to={`/blog/${blog.id}`}
            className=" block bg-white rounded-xl shadow-sm overflow-hidden transition-all ease-in-out duration-300 hover:-translate-y-2 hover:shadow-lg"
            key={blog.id}
          >
            <img src={blog.uploadBlogFile} className="w-full" alt={blog.title} />
            <div className="p-5 space-y-2">
              <span className="bg-secondary/30 px-3 py-1 rounded-full text-secondary text-sm inline-block">
                {blog.blogcategory}
              </span>
              <h5 className="font-medium mb-2 leading-snug text-gray-900">
                {blog.title}
              </h5>
              <p className="text-xs text-gray-600 leading-6 font-Outfit mb-3">
                {blog.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
export default BlogList;
