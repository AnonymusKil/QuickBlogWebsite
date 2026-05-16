import { Link } from "react-router-dom";
import { blog_data_post } from "../assets/post.ts";
function BlogList() {
  return (
    <section className="px-5 lg:max-w-[80%] mx-auto mt-10 font-Outfit">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blog_data_post.map((blog) => (
          <Link
            to={`/blog/${blog._id}`}
            className=" block bg-white rounded-xl shadow-sm overflow-hidden transition-all ease-in-out duration-300 hover:-translate-y-2 hover:shadow-lg"
            key={blog._id}
          >
            <img src={blog.image} className="w-full" alt={blog.title} />
            <div className="p-5 space-y-2">
              <span className="bg-secondary/30 px-3 py-1 rounded-full text-secondary text-sm inline-block">
                {blog.category}
              </span>
              <h5 className="font-medium mb-2 leading-snug text-gray-900">
                {blog.title}
              </h5>
              <p className="text-xs text-gray-600 leading-6 font-Outfit mb-3">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting..
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
export default BlogList;
