import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate()
  return (
    <main className="bg-primary">
      <section className="flex items-center justify-center h-screen px-4">
        <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-sm border border-primarytext/98">
          <div className="text-center mb-8">
            <h1 className="font-bold text-3xl text-gray-800">
              <span className="text-[#5044e5]">Admin</span> Login
            </h1>

            <p className="text-gray-500 mt-2 text-sm leading-6">
              Enter your credentials to access the admin panel
            </p>
          </div>

          <form className="space-y-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-600">
                Email
              </label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email..."
                className="border-b-2 border-gray-300  px-4 py-3 outline-none "
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-600">
                Password
              </label>

              <input
                type="password"
                id="password"
                placeholder="Enter your password..."
                className="border-b-2 border-gray-300  px-4 py-3 outline-none "
              />
            </div>

            <button onClick={() => navigate("/adminDashboard")} className="w-full bg-[#5044e5] text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default AdminLogin;
