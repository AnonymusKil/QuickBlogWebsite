import { assets } from "../assets/assets";
function AddBlog() {
  return (
    <search className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 max-w-4xl text-gray-700">
      <div className="">
        <p className=" font-medium">Upload thumbnail</p>
        <div className="mt-3">
          <label htmlFor="thumbmail" className="cursor-pointer">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="thumbmail" className="hidden" />
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="" className=" font-medium">
            Blog Title
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="border border-gray-500 rounded-xs px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition max-w-xl w-full"
          />
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="" className=" font-medium">
            Sub Title
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="border border-gray-500 rounded-xs px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition max-w-xl w-full"
          />
        </div>

        <div className="mb-6 max-h-75 max-w-xl w-full mt-3.5">
          <p className="text-gray-700 font-medium mb-3">Blog Description</p>

          <div className="border border-gray-300 rounded-xs overflow-hidden">
            <div
              role="toolbar"
              className="flex flex-wrap items-center gap-2 p-3 border-b border-gray-200 bg-gray-50"
            >
              <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-bold hover:bg-gray-100 transition">
                B
              </button>

              <button className="px-3 py-1.5 border border-gray-300 rounded-lg italic text-sm hover:bg-gray-100 transition">
                I
              </button>

              <button className="px-3 py-1.5 border border-gray-300 rounded-lg underline text-sm hover:bg-gray-100 transition">
                U
              </button>

              <button className="px-3 py-1.5 border border-gray-300 rounded-lg line-through text-sm hover:bg-gray-100 transition">
                S
              </button>

              <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm outline-none">
                <option>Paragraph</option>
                <option>Heading 1</option>
                <option>Heading 2</option>
              </select>

              <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition">
                Link
              </button>

              <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition">
                Image
              </button>
            </div>

            <textarea
              placeholder="Write your blog content here..."
              className="w-full  p-5 outline-none resize-none text-gray-700"
            ></textarea>

            <div className="flex justify-end p-4 ">
              <button className="bg-[#4C4C4C] text-white px-4 py-2 rounded-lg text-sm hover:bg-black transition">
                Generate with AI
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-2">
              Blog Category
            </label>

            <select
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition"
            >
              <option>Lifestyle</option>
              <option>Technology</option>
              <option>Startup</option>
              <option>Finance</option>
            </select>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <input
              type="checkbox"
              id="publish"
              className="w-4 h-4 accent-secondary"
            />

            <label
              htmlFor="publish"
              className="text-gray-700 font-medium cursor-pointer"
            >
              Publish Immediately
            </label>
          </div>

          <button
            className="bg-secondary text-white font-semibold px-8 py-3 rounded-xl hover:bg-secondary/90 transition duration-300"
          >
            Add Blog
          </button>
      </div>
    </search>
  );
}

export default AddBlog;
