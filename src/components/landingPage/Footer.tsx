"use client";
export default function Footer() {
  return (
    <footer id="Contact" className="bg-white px-10 pb-8 pt-5 sm:pb-8 sm:pt-8">
      <div className="space-y-8 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0 lg:flex lg:justify-between">
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

        <div className="space-y-4 text-center sm:text-left">
          <h4 className="text-xl font-bold text-tailwindGreen">Useful Links</h4>
          <ul className="text-gray-600">
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-center sm:text-left">
          <h4 className="text-xl font-bold text-tailwindGreen">Our Service</h4>
          <ul className="text-gray-600">
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                Web Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                Product Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tailwindBlue">
                Graphic Design
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-center sm:text-left">
          <h4 className="text-xl font-bold text-tailwindGreen">Our Social Networks</h4>
          <p className="text-gray-600">
            Explore our vibrant social media presence and connect
            <br />
            with us for exciting updates and valuable insights
          </p>
          <div className="flex justify-center space-x-4 sm:justify-start">
            <div className="h-6 w-6 rounded-full bg-tailwindGreenSecondary"></div>
            <div className="h-6 w-6 rounded-full bg-tailwindGreenSecondary"></div>
            <div className="h-6 w-6 rounded-full bg-tailwindGreenSecondary"></div>
            <div className="h-6 w-6 rounded-full bg-tailwindGreen"></div>
          </div>
        </div>
      </div>

      <section className="mt-8 text-center">
        <p className="text-gray-600">&copy; 2023 Gede Dewo Wahyu M.W. All rights reserved.</p>
      </section>
    </footer>
  );
}
