"use client";

// IMPORT LIBRARIES
import { useSelector } from "react-redux";

// IMPORT COMPONENTS
import { locale } from "@/locales/landingPage/language";
export default function Footer() {
  // REDUX LANGUAGE
  const lang = locale;
  const code: number = useSelector((state: any) => state.lang.code);
  return (
    <footer id="Contact" className="bg-white px-10 pb-8 pt-5 sm:pt-8">
      <div className="space-y-8 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0 lg:flex lg:justify-between">
        {/* ARSHA */}
        <div className="space-y-4 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-tailwindGreen">ARSHA</h2>
          <ul>
            <li>
              <p>A108 Adam Street</p>
            </li>
            <li>
              <p>New York, NY 535022</p>
            </li>
            <li>
              <p>United States</p>
            </li>
            <li className="mt-5">
              <p>
                <strong>Phone:</strong> +1 5589 55488 55
              </p>
            </li>
            <li>
              <p>
                <strong>Email:</strong> info@example.com
              </p>
            </li>
          </ul>
        </div>

        {/* USEFUL LINKS */}
        <div className="space-y-4 text-center sm:text-left">
          <h4 className="text-xl font-bold text-tailwindGreen">{lang[code].footer.links.title}</h4>
          <ul className="text-gray-600">
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                {lang[code].footer.links.list[0]}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                {lang[code].footer.links.list[1]}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                {lang[code].footer.links.list[2]}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                {lang[code].footer.links.list[3]}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                {lang[code].footer.links.list[4]}
              </a>
            </li>
          </ul>
        </div>

        {/* OUR SERVICES */}
        <div className="space-y-4 text-center sm:text-left">
          <h4 className="text-xl font-bold text-tailwindGreen">{lang[code].footer.service.title}</h4>
          <ul className="text-gray-600">
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                {lang[code].footer.service.list[0]}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                {lang[code].footer.service.list[1]}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                {lang[code].footer.service.list[2]}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                {lang[code].footer.service.list[3]}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                {lang[code].footer.service.list[4]}
              </a>
            </li>
          </ul>
        </div>

        {/* OUR SOCIAL NETWORKS */}
        <div className="space-y-4 text-center sm:text-left">
          <h4 className="text-xl font-bold text-tailwindGreen">{lang[code].footer.social.title}</h4>
          <div>
            <p className="text-gray-600">{lang[code].footer.social.desc[0]}</p>
            <p className="text-gray-600">{lang[code].footer.social.desc[1]}</p>
          </div>
          <div className="flex justify-center space-x-4 sm:justify-start">
            <div className="h-6 w-6 rounded-full bg-tailwindGreenSecondary"></div>
            <div className="h-6 w-6 rounded-full bg-tailwindGreenSecondary"></div>
            <div className="h-6 w-6 rounded-full bg-tailwindGreenSecondary"></div>
            <div className="h-6 w-6 rounded-full bg-tailwindGreen"></div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <section className="mt-8 text-center">
        <p className="text-gray-600">{lang[code].footer.copyright}</p>
      </section>
    </footer>
  );
}
