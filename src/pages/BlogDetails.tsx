import BlogContent from "../components/BlogContent";
import BlogContentIntro from "../components/BlogContentIntro";
import Comment from "../components/Comment";
import Hero from "../components/Hero";

function BlogDetails() {
  return (
    <main className="bg-primary">
      <Hero>
        <p className="text-secondary font-semibold text-sm">
          Published on April 21st 2025
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-4 text-[#3B3B3B] leading-tight">
          A detailed step by step guide to manage your lifestyle
        </h1>

        <p className="text-gray-500 text-base leading-8 mt-5 max-w-2xl mx-auto">
          A Simple Step-by-Step Guide to Managing Your Lifestyle.
        </p>

        <span className="inline-block bg-button/10 text-secondary font-semibold rounded-full px-5 py-2 border border-secondary/15 text-sm mt-6">
          Michael Brown
        </span>
      </Hero>
      <BlogContentIntro/>
      <BlogContent/>
      <Comment/>
    </main>
  );
}

export default BlogDetails;
