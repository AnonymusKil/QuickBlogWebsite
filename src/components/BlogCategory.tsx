import { blogCategories } from "../assets/assets";

function BlogCategory() {
  return (
    <section className="mt-6 px-4">
      
      {/* scroll container */}
      <div className="flex lg:justify-center lg:overflow-hidden gap-3 overflow-x-auto no-scrollbar max-w-4xl mx-auto text-[16px] text-gray-600 ">

        <button className="px-4 py-1 rounded-full bg-secondary text-white whitespace-nowrap">
          All
        </button>

        {blogCategories.map((category, index) => (
          <button
            key={index}
            className="px-4 py-1 rounded-full hover:bg-secondary hover:text-white hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            {category}
          </button>
        ))}

      </div>

    </section>
  );
}

export default BlogCategory;