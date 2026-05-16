type SearchBoxProps = {
  className?: string
  buttonClassName?: string
}

function SearchBox ({className, buttonClassName}: SearchBoxProps) {
return(
    <section>
        <form className="flex justify-center mt-6 px-4">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search..."
            className= {`w-full bg-white border border-gray-300 rounded-lg text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary px-4 py-3 ${className}`}
          />

          <button
            type="submit"
            className = {`absolute right-2  bg-secondary text-white rounded-lg px-6 py-2 text-sm font-semibold hover:bg-secondary/90 transition ${buttonClassName}`}
          >
            Search
          </button>
        </div>
      </form>
    </section>
     
)
}

export default SearchBox