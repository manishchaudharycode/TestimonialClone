import { Button } from "../components/ui/button";

function HomeDashboard() {
  return (
    <div className="relative pt-15 pb-5 md:pt-20 md:pb-10">
      <div className="text-center max-w-4xl mx-auto pb-12 md:pb-16 ">
        <h1 className="font-semibold text-white text-6xl ">
          Get testimonials from your customers with case
        </h1>
        <p className="text-gray-600 dark:text-gray-400 pt-6 text-xl ">
          Collecting testimonials is hard, we get it! So we built Testimonial.
          In minutes, you can collect text and video testimonials from your
          customers with no need for a developer or website hosting.
        </p>
      </div>
      <div className="">
        <div className="flex items-center justify-center  gap-5">
          <Button className="rounded-xl border-2 px-10 py-7 bg-purple-500 ">
            <a className="text-white text-xl font-semibold" href="/signup">
              Try Free now
            </a>
          </Button>
          <Button
            variant="outline"
            className="border-purple-500 px-7 py-7 text-white text-xl"
          >
            Talk to us
            <div className="flex">
              <img className="h-7" src="/boy.png" alt="boy" />
              <img className="h-7 rounded-full" src="/girl.jpg" alt="" />
              <img className="h-7" src="/photo1.png" alt="" />
              <img className="h-7 rounded-full" src="/photo2.jpg" alt="" />
            </div>
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Get started with free credits on us.
            <a
              className="font-semibold underline decoration-2 underline-offset-4 decoration-gray-500 "
              href="/pricing"
            >
              {" "}
              See our pricing -
            </a>
          </p>
        </div>
      </div>
      <div className="relative items-center pt-15">
        <div className="rounded-lg border border-gray-100 overflow-hidden dark:border-gray-600  p-2">
          <video
            className="w-100 h-100"
            playsInline
            preload="auto"
            controls
            autoPlay
            loop
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute right-0 hidden xl:block top-{6.5rem} right-{7.5rem}">
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg px-4 py-4 shadow-lg w-64 transform rotate-6 hover:rotate-0 duration-300 transition ">
            <div className="mr-3 relative cursor-pointer ">
              <img
                className="rounded-full h-5"
                src="/public.png"
                alt="Chris Lema"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-transparent rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-white bg-opacity-50  hover:bg-opacity-90"
                  >
                    <path></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-1 cursor-pointer">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                See how over customer
                <br />
                <span className="font-bold">Chris Lema </span>
                "uses us"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
