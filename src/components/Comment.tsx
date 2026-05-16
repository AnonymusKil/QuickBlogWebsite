import { assets, comments_data } from "../assets/assets";

function Comment() {
  return (
    <section className="px-4 mt-16">
      <div className="max-w-3xl mx-auto text-gray-600">
        <div className="mb-6">
          <h3 className="font-semibold text-2xl text-gray-800">Comments (5)</h3>
        </div>
        {comments_data.map((comments) => (
          <div key={comments._id} className="border border-gray-200 bg-gray-50 p-5 sm:p-6 mt-5 max-w-xl rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <img src={assets.user_icon} className="w-9 h-9 rounded-full" alt="" />
              <div>
                <p className="text-gray-700 font-semibold text-sm">
                  {comments.name}
                </p>
              </div>
            </div>
            <p className="text-sm leading-7 text-gray-600 ml-12">
              {comments.content}
            </p>

            <div className="flex justify-end mt-4">
              <p className="text-gray-400 text-xs">{comments.createdAt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Comment;
