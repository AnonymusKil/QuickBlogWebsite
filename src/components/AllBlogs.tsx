import BlogTable from "./BlogTable";

function AllBlogs() {
  return (
    <section>
      <p className="mb-3.5 font-Outfit font-medium text-gray-500">All Blogs</p>
      <div className="bg-white rounded-lg shadow scrollbar-hide">
        <BlogTable />
      </div>
    </section>
  );
}

export default AllBlogs;
