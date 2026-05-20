import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {supabase} from "../config/supabase";
import { assets } from "../assets/assets";
type comments = {
  id: number;
  name: string;
  commentcontent: string;
  created_at: string;
}
function Comment() {
  const { id } = useParams<{ id: string }>();
  const [comments, setComments] = useState<comments[]>([])
  useEffect(()=> {
    const fetchComemnts = async () => {
      const {data, error} = await supabase.from("comment").select("*").eq("blogid", id).order("created_at", {ascending: false});
      if(error){
        console.log(error);
        return;
      }
      if(data){
        setComments(data);
      }
    }
    fetchComemnts();

  }, [id])
  return (
    <section className="px-4 mt-16">
      <div className="max-w-3xl mx-auto text-gray-600">
        <div className="mb-6">
          <h3 className="font-semibold text-2xl text-gray-800">Comments ({comments?.length ?? 0})</h3>
        </div>
        {comments?.map((comment) => (
          <div key={comment.id} className="border border-gray-200 bg-gray-50 p-5 sm:p-6 mt-5 max-w-xl rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <img src={assets.user_icon} className="w-9 h-9 rounded-full" alt="" />
              <div>
                <p className="text-gray-700 font-semibold text-sm">
                  {comment.name}
                </p>
              </div>
            </div>
            <p className="text-sm leading-7 text-gray-600 ml-12">
              {comment.commentcontent}
            </p>

            <div className="flex justify-end mt-4">
              <p className="text-gray-400 text-xs">{comment.created_at}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Comment;
