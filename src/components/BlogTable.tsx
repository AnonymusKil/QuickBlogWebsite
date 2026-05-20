import { assets } from "../assets/assets";

function BlogTable() {
  return (
    <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-600 text-left uppercase ">
            <tr>
              <th scope="col" className="px-2 py-4">
                #
              </th>
              <th scope="col" className="px-2 py-4">
                Blog Title
              </th>
              <th scope="col" className="px-2 py-4">
                Date
              </th>
              <th scope="col" className="px-2 py-4">
                STatus
              </th>
              <th scope="col" className="px-2 py-4">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-y border-gray-300">
              <th className="px-2 py-4">1</th>
              <td className="px-2 py-4">
                The Rise of Artificial Intelligence in Modern Technology
              </td>
              <td className="px-2 py-4">Wed May 28 2025</td>
              <td className="px-2 py-4">
                <p className="text-green-600">Published</p>
              </td>
              <td className="px-2 py-4 flex gap-3 text-xs">
                <button className="border px-2 py-0.5 mt-1 rounded cursor-pointer">
                  Unpublish
                </button>
                <img
                  className="w-8 hover:scale-110 transition-all cursor-pointer"
                  src={assets.cross_icon}
                  alt=""
                />
              </td>
            </tr>
            <tr className="border-y border-gray-300">
              <th className="px-2 py-4">2</th>
              <td className="px-2 py-4">Importance of Tourism</td>
              <td className="px-2 py-4">Thur May 29 2025</td>
              <td className="px-2 py-4">
                <p className="text-green-600">Published</p>
              </td>
              <td className="px-2 py-4 flex gap-3 text-xs">
                <button className="border px-2 py-0.5 mt-1 rounded cursor-pointer">
                  Unpublish
                </button>
                <img
                  className="w-8 hover:scale-110 transition-all cursor-pointer"
                  src={assets.cross_icon}
                  alt=""
                />
              </td>
            </tr>
            <tr className="border-y border-gray-300">
              <th className="px-2 py-4  font-bold">3</th>
              <td className="px-2 py-4">The New way of Study</td>
              <td className="px-2 py-4">Friday May 29 2025</td>
              <td className="px-2 py-4">
                <p className="text-green-600">Published</p>
              </td>
              <td className="px-2 py-4 flex gap-3 text-xs">
                <button className="border px-2 py-0.5 mt-1 rounded cursor-pointer">
                  Unpublish
                </button>
                <img
                  className="w-8 hover:scale-110 transition-all cursor-pointer"
                  src={assets.cross_icon}
                  alt=""
                />
              </td>
            </tr>
            <tr className="border-y border-gray-300">
              <th className="px-2 py-4  font-bold">4</th>
              <td className="px-2 py-4">Taxes on Luxry Houses</td>
              <td className="px-2 py-4">Friday May 29 2025</td>
              <td className="px-2 py-4">
                <p className="text-green-600">Published</p>
              </td>
              <td className="px-2 py-4 flex gap-3 text-xs">
                <button className="border px-2 py-0.5 mt-1 rounded cursor-pointer">
                  Unpublish
                </button>
                <img
                  className="w-8 hover:scale-110 transition-all cursor-pointer"
                  src={assets.cross_icon}
                  alt=""
                />
              </td>
            </tr>
            <tr className="border-y border-gray-300">
              <th className="px-2 py-4  font-bold">5</th>
              <td className="px-2 py-4">Maximazing returns by minimizin resources in your startup</td>
              <td className="px-2 py-4">Friday May 29 2025</td>
              <td className="px-2 py-4">
                <p className="text-green-600">Published</p>
              </td>
              <td className="px-2 py-4 flex gap-3 text-xs">
                <button className="border px-2 py-0.5 mt-1 rounded cursor-pointer">
                  Unpublish
                </button>
                <img
                  className="w-8 hover:scale-110 transition-all cursor-pointer"
                  src={assets.cross_icon}
                  alt=""
                />
              </td>
            </tr>
          </tbody>
        </table>
  )
}

export default BlogTable