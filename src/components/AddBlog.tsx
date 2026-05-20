import { useState } from "react";
import { supabase } from "../config/supabase";
import { assets } from "../assets/assets";
function AddBlog() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [publish, setPublish] = useState<boolean>(false);
  const [preview, setPreview] = useState<string>("");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const imageURL = URL.createObjectURL(selectedFile);
      setPreview(imageURL);
    }
  };

  const handleSubmit = async () => {
    try {
      if(!title || !subtitle || !content || !category){
        alert("Please fill in all the fields");
        return;
      }
      if (!file) {
        alert("Please Upload an image");
        return;
      }
      const fileName = `${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("blogimage")
        .upload(fileName, file);
      if (uploadError) {
        console.log(uploadError);
        return;
      }
      
      const { data } = supabase.storage
        .from("blogimage")
        .getPublicUrl(fileName);
      const imageUrl = data.publicUrl;

      const { error: insertError } = await supabase.from("BlogTable").insert([
        {
          title: title,
          subtitle: subtitle,
          blogdescription: content,
          blogcategory: category,
          uploadBlogFile: imageUrl,
          publish: publish,
        },
      ]);
      if (insertError) {
        console.log(insertError);
      }
      alert("Blog Created successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <search className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 max-w-4xl text-gray-700">
      <div className="">
        <p className=" font-medium">Upload thumbnail</p>
        <div className="mt-3">
          <label htmlFor="thumbmail" className="cursor-pointer">
            {preview ? (
              <div>
                <img src={preview} alt="" className="w-12" />
                <img src={assets.upload_area} alt="" className="hidden" />
              </div>
            ) : (
              <img src={assets.upload_area} alt="" className="" />
            )}
          </label>
          <input
            type="file"
            id="thumbmail"
            className="hidden"
            onChange={handleFile}
          />

        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="" className=" font-medium">
            Blog Title
          </label>
          <input
            type="text"
            placeholder="Type here"
            value={title}
            required
            className="border border-gray-500 rounded-xs px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition max-w-xl w-full"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="" className=" font-medium">
            Sub Title
          </label>
          <input
            type="text"
            placeholder="Type here"
            required
            value={subtitle}
            className="border border-gray-500 rounded-xs px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition max-w-xl w-full"
            onChange={(e) => setSubtitle(e.target.value)}
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
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
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
            className="border border-gray-300 rounded-[5px] px-3 py-2.5 outline-none transition text-gray-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option disabled hidden value="">
              Select category
            </option>
            <option>All</option>
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
            checked={publish}
            onChange={(e) => setPublish(e.target.checked)}
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
          onClick={handleSubmit}
        >
          Add Blog
        </button>
      </div>
    </search>
  );
}

export default AddBlog;
