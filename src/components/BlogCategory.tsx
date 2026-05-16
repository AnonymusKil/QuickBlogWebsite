import {blogCategories} from "../assets/assets"
function BlogCategory() {
  return (
    <section className="mt-6 px-4">
        <div className="grid grid-cols-5  sm:justify-center lg:flex lg:items-center lg:justify-center text-[16px] text-gray-600">
            <button className="px-4 w-full lg:w-auto py-1 rounded-full bg-secondary text-white transition">All</button>
            {blogCategories.map((category, index) => (
                <button key={index} className="px-4 w-full  lg:w-auto  py-1 rounded-full hover:bg-secondary hover:text-white hover:scale-105 transition-all duration-300">{category}</button>
            ))}

        </div>
        </section>
  )
}

export default BlogCategory