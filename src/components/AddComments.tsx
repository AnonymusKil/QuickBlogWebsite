
function AddComments() {
  return (
   <section className="px-4 mt-14">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <h3 className="font-semibold text-2xl text-gray-800">
              Add Your Comments
            </h3>
          </div>
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              required
              placeholder="Your Name"
              className="border border-gray-300 w-full max-w-md rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition duration-300"
            />

           
            <textarea
              name="comments"
              id="comments"
              placeholder="Enter your comment..."
              className="border border-gray-300 w-full max-w-md rounded-xl px-4 py-4 text-sm min-h-40 resize-none outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition duration-300"
            ></textarea>
          </form>
          <button
            className="rounded bg-secondary text-white font-semibold px-6 py-2 mt-3.5 hover:bg-secondary/90 transition duration-300"
          >
            Submit
          </button>
        </div>
      </section>

  )
}

export default AddComments