import { assets } from "../assets/assets"
function ShareArticle() {
  return (
    <section className="px-4 mt-14">
        <div className="max-w-3xl mx-auto text-gray-600">
          <div className="mb-6">
            <h3 className="font-semibold text-2xl text-gray-800">
              Share this article on Social Media
            </h3>
          </div>
           <div className="flex items-center gap-4">
            <img className="hover:scale-110 transition duration-300 cursor-pointer" src={assets.facebook_icon} alt=""/>
            <img className="hover:scale-110 transition duration-300 cursor-pointer" src={assets.twitter_icon} alt=""/>
            <img className="hover:scale-110 transition duration-300 cursor-pointer" src={assets.googleplus_icon} alt=""/>
           </div>
        </div>
      </section>
  )
}

export default ShareArticle