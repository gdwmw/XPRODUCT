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
              <p>Home</p>
            </li>
            <li>
              <p>About Us</p>
            </li>
            <li>
              <p>Service</p>
            </li>
            <li>
              <p>Terms of Service</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-center sm:text-left">
          <h4 className="text-xl font-bold text-tailwindGreen">Our Service</h4>
          <ul className="text-gray-600">
            <li>
              <p>Web Design</p>
            </li>
            <li>
              <p>Web Development</p>
            </li>
            <li>
              <p>Product Management</p>
            </li>
            <li>
              <p>Marketing</p>
            </li>
            <li>
              <p>Graphic Design</p>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-center sm:text-left">
          <h4 className="text-xl font-bold text-tailwindGreen">Our Social Networks</h4>
          <p className="text-gray-600">
            Cras fermentum odio eu feugiat lide par
            <br /> naso tierra videa magna derita valies
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
