import { useParams } from "react-router-dom"
import {blog_data_post} from "../assets/post"
function BlogContentIntro() {
   const{id} = useParams()
    const blog = blog_data_post.find((item) =>item._id === id )
  return (
    <section className="mt-14 px-4">
        <article className="max-w-5xl mx-auto">
            <img src={blog?.image} alt="" className="rounded-3xl w-full object-cover max-h-125" />
             <div className="mt-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-semibold text-[#3B3B3B]">
              A Simple Step-by-Step Guide to Managing Your Lifestyle
            </h2>

            <p className="text-gray-600 leading-8 text-base">
              If you're looking to improve your health, boost productivity, and
              create a balanced life, managing your lifestyle intentionally is
              key. Here's a short guide to help you take control of your daily
              habits and overall well-being.
            </p>
          </div>

        </article>        
        </section>
  )
}

export default BlogContentIntro