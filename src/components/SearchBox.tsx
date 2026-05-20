import { useState, type SyntheticEvent } from "react"
import { supabase } from "../config/supabase"

type SearchBoxProps = {
  className?: string
  buttonClassName?: string
}
function SearchBox({ className, buttonClassName }: SearchBoxProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchBar = async (e: SyntheticEvent) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("BlogTable")
      .select("*")
      .ilike("title", `%${searchTerm}%`);

    if (error) {
      alert("An error occurred while searching. Please try again.");
      return;
    }

    alert(`Found ${data.length} results for "${searchTerm}"`);
  };

  return (
    <section>
      <form
        className="flex justify-center mt-6 px-4"
        onSubmit={searchBar}
      >
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search..."
            className={`w-full bg-white border border-gray-300 rounded-lg text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary px-4 py-3 ${className}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            type="submit"
            className={`absolute right-2 bg-secondary text-white rounded-lg px-6 py-2 text-sm font-semibold hover:bg-secondary/90 transition ${buttonClassName}`}
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchBox