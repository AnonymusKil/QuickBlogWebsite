import { assets } from "../assets/assets";

function Comments() {
  return (
    <section>
      <p className="mb-4 font-Outfit font-bold text-gray-500">
        Comments
      </p>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm text-left text-gray-600">
          
          {/* HEADER */}
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
            <tr>
              <th className="px-4 py-4">Blog & Comment</th>
              <th className="px-4 py-4">Date</th>
              <th className="px-4 py-4">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-gray-200">
            
            {[1, 2, 3].map((item) => (
              <tr
                key={item}
                className="hover:bg-gray-50 transition"
              >
                {/* BLOG + COMMENT */}
                <td className="px-4 py-4 space-y-2">
                  
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-700">
                      Blog:
                    </span>
                    <p className="text-gray-600">
                      AI Tools That Can Instantly Boost Your Productivity in 2025
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-700">
                      Name:
                    </span>
                    <p className="text-gray-600">Michael Scott</p>
                  </div>

                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-700">
                      Comment:
                    </span>
                    <p className="text-gray-600">
                      This is my new comment
                    </p>
                  </div>
                </td>

                {/* DATE */}
                <td className="px-4 py-4 text-gray-500">
                  24th July, 2024
                </td>

                {/* ACTIONS */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    
                    <img
                      src={assets.tick_icon}
                      alt="approve"
                      className="w-8 cursor-pointer hover:scale-110 transition"
                    />

                    <img
                      src={assets.bin_icon}
                      alt="delete"
                      className="w-8 cursor-pointer hover:scale-110 transition"
                    />
                  </div>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Comments;