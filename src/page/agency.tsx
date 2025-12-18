import { Link } from "react-router-dom";
import Navabar from "../components/navabar";
import { Button } from "../components/ui/button";

function Agency() {
  return (
    <div className="bg-neutral-900">
      <div>
        <Navabar />
      </div>
      <div className="bg-neutral-900 max-w-7xl mx-auto pb-10 md:pb-20 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-6 pt-20 md:pt-32 ">
        <div className="text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1 className="text-6xl text-white font-bold">
            Collect and embed video testimonials in minutes
          </h1>
          <p className="text-gray-500 dark:text-gray-400 sm:mt-5 text-xl lg:text-lg xl:text-xl mt-3 ">
            Testimonial helps your agency boost conversions on your clients'
            websites with social proof. Collect and embed video testimonials in
            record time like this 👉
          </p>
          <Button className="text-white uppercase sm:w-auto sm:mb-0 mb-4 mt-4 bg-blue-500">
            <Link to={"/signup"}>try it naow</Link>
          </Button>
          <p className="mt-4  text-sm text-gray-50 hover:text-gray-400 ">
            7 days free trial, get started today!
          </p>
        </div>
        <div className="relative sm:max-w-lg sm:mx-auto lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex items-center">
          <div className="relative text-center mx-auto w-full lg:max-w-md rounded-lg ">
            <div>
              <svg
                className="h-6 w-6 text-purple-600"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
              </svg>
              <p className="mt-2 rounded-lg text-base sm:text-xl lg:text-lg xl:text-xl font-semibold text-gray-600  bg-yellow-100 px-2 ">
                Once we added Testimonial, it unlocked so much more conversion
                for us!
              </p>
            </div>
            <iframe
              width="500px"
              height="375px"
              src="https://embed-v2.testimonial.to/v/b36ad4e5-d710-478c-a920-a21735dfed5d"
              scrolling="no"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              className="mx-auto"
              style={{ "max-width": "100%" } as React.CSSProperties}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agency;
