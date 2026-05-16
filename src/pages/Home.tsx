import BlogCategory from "../components/BlogCategory";
import BlogList from "../components/BlogList";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
function Home() {
  return (
    <main className="bg-primary">
      <Hero>
        <button className="bg-button/10 text-secondary font-semibold rounded-full px-5 py-2 border border-secondary/15 text-sm">
          New: AI Feature Integrated
        </button>
         
        <h1 className="text-4xl sm:text-6xl font-semibold mt-4 text-gray-700 leading-[1.1]">
          Your own <span className="text-secondary">blogging</span> Platform.
        </h1>

        <p className="text-gray-500 text-sm sm:text-base my-6 leading-7 max-w-sm sm:max-w-2xl mx-auto">
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it’s one word or a thousand, your story
          starts right here.
        </p>
        <SearchBox
          className="pr-24"
          buttonClassName="top-1/2 -translate-y-1/2"
        />
        <BlogCategory/>
      </Hero>

      <BlogList />

      <section className="mt-14 text-center px-4 font-Outfit">
        <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-700 sm:text-4xl">
          Never Miss a Blog!
        </h1>
        <p className="text-gray-500/70 text-xl lg:text-[18px] sm:text-base my-2 leading-7 pb-3">
          Subscribe to get the latest blog, new tech, and exclusive news.
        </p>
        <SearchBox className="pr-32" buttonClassName="right-1 bottom-1 top-1" />
      </section>
    </main>
  );
}

export default Home;
