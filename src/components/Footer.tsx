import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { footer_data } from "../assets/assets";
function Footer() {
  return (
    <footer className="mt-20 bg-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-14">
        <div className="flex flex-col lg:flex-row justify-between gap-14">
          <div className="max-w-sm">
            <img src={logo} className="w-32" alt="logo" />

            <p className="text-gray-500 text-sm leading-7 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              unde quaerat eveniet cumque accusamus atque qui error quo enim
              fugiat?
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 gap-8">
            {footer_data.map((footerdata, index) => (
              <div className="" key={index}>
                <h3 className="font-semibold text-base mb-5 text-gray-800">
                  {footerdata.title}
                </h3>
                <ul className="lg:space-y-3 text-sm">
                  {footerdata.links.map((links, idx) => (
                    <li key={idx}>
                      <Link
                        to="/"
                        className="text-gray-600 hover:text-secondary transition duration-300"
                      >
                        {links}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2026 QuickBlog. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
export default Footer;
