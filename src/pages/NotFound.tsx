import { Link } from "react-router-dom";
function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center font-Outfit">
      <div className="text-7xl font-bold text-secondary mb-4">404</div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
        Page not found
      </h1>

      <p className="text-gray-500 mt-3 max-w-md">
        The page you're looking for doesn’t exist or has been moved.
      </p>
      <div className="mt-6 flex gap-4">
        <Link
          to="/"
          className="px-5 py-2 rounded-lg bg-secondary text-white hover:opacity-90 transition"
        >
          Go Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Go Back
        </button>
      </div>

    </main>
  );
}

export default NotFound;
