import { useParams } from "react-router-dom";
import { useState, type SyntheticEvent } from "react";
import { supabase } from "../config/supabase";
function AddComments() {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const addComment = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const { error: insertError } = await supabase.from("comment").insert([
        {
          name,
          commentcontent: comment,
          blogid: id
        },
      ]);
      if (insertError) {
        console.log(insertError);
        alert(insertError);
      }
      if(!insertError){
        setName("");
        setComment("");
        alert("Comment added successfully");
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="px-4 mt-14">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <h3 className="font-semibold text-2xl text-gray-800">
            Add Your Comments
          </h3>
        </div>
        <form onSubmit={addComment} action="" className="flex flex-col gap-4">
          <input
            type="text"
            required
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 w-full max-w-md rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition duration-300"
          />

          <textarea
            name="comments"
            id="comments"
            placeholder="Enter your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border border-gray-300 w-full max-w-md rounded-xl px-4 py-4 text-sm min-h-40 resize-none outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition duration-300"
          ></textarea>
          <button  className="rounded bg-secondary text-white font-semibold px-6 py-2 mt-3.5 hover:bg-secondary/90 transition duration-300">
          Submit
        </button>
        </form>
        
      </div>
    </section>
  );
}

export default AddComments;
