import { blog_steps } from "../assets/post";
function BlogContent() {
  return (
    <section className="mt-14 px-4 pb-20">
      <div className="max-w-3xl mx-auto space-y-10">
        {blog_steps.map((dangeroussteps, index) => (
          <div className="space-y-4" key={index}>
            <h2 className="text-3xl font-semibold text-[#3B3B3B]">{dangeroussteps.title}</h2>
            <p className="text-gray-600 leading-8 text-base">{dangeroussteps.description}</p>

          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogContent;
