import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../config/supabase";


type Blog = {
  id: string;
  title: string;
  subtitle: string;
  uploadBlogFile: string;
  blogdescription: string;
  blogcategory: string;
  publish: boolean;
  created_at: string;
};

function BlogContent() {
  const { id } = useParams();
  const [blogs, setBlog] = useState<Blog | null>(null);
  useEffect(() => {
    const fetchBlog = async () => {
      const { data: fetchedBlog, error: fetchError } = await supabase
        .from("BlogTable")
        .select("*")
        .eq("id", id)
        .single();
      if (fetchError) {
        console.log(fetchError);
        return;
      }
      if (fetchedBlog) {
        setBlog(fetchedBlog);
      }
    };
    fetchBlog();
  }, [id]);

  return (
    <section className="mt-14 px-4 pb-20">
      <div className="max-w-3xl mx-auto space-y-10">
        {blogs?.blogdescription.split('\n').map((line, index) => (
          <div className="space-y-4" key={index} dangerouslySetInnerHTML={{__html: line}} />
        ))}
      </div>
    </section>
  );
}

export default BlogContent;
