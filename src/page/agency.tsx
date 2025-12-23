import { Link } from "react-router-dom";
import Navabar from "../components/navabar";
import { Button } from "../components/ui/button";
import { listOne, listTwo } from "../lib/constant";

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
      <div className="bg-neutral-900">
        <div className="py-12 dark:borde-t dark:border-y-gray-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold uppercase">
              Opportunities for you
            </h2>
            <h1 className="mb-4 text-white text-6xl font-semibold ">
              Offer a unique, dynamic service
            </h1>
            <p className="mt-4 max-w-4xl text-xl text-gray-600 dark:text-gray-400 lg:mx-auto font-semibold">
              Your clients need testimonials to drive more conversions for their
              business.
            </p>
            <p className="max-w-4xl text-xl text-gray-500 lg:mx-auto ">
              They understand the value of the social proof. Helping them
              collect, manage, embed testimonials is a no-brainer service they
              are eager to have!
            </p>
          </div>
          <div className="mt-25 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6 flow-root bg-white rounded-lg dark:bg-gray-800 shadpw-lg px-6 pb-8">
              <div className="-mt-12">
                <span className="inline-flex items-center justify-center rounded-md bg-purple-600 p-3 shadow-lg">
                  <svg
                    xmlns=""
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-200">
                  Easy upsell
                </h3>
                <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                  Your clients know getting testimonials is cruicial for their
                  business. It's your job to help them get more!
                </p>
              </div>
            </div>
            <div className="pt-6 flow-root bg-white rounded-lg dark:bg-gray-800 shadpw-lg px-6 pb-8">
              <div className="-mt-12">
                <span className="inline-flex items-center justify-center rounded-md bg-purple-600 p-3 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    ></path>
                  </svg>
                </span>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-200">
                  Recurring revenue
                </h3>
                <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                  Testimonials need to be maintained, hosted and updated, adding
                  clear value to your service fee.{" "}
                </p>
              </div>
            </div>
            <div className="pt-6 flow-root bg-white rounded-lg dark:bg-gray-800 shadpw-lg px-6 pb-8">
              <div className="-mt-12">
                <span className="inline-flex items-center justify-center rounded-md bg-purple-600 p-3 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    ></path>
                  </svg>
                </span>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-200">
                  Competitive edge
                </h3>
                <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                  Few agencies offer unique features like Testimonial. We help
                  you stand out.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 dark:border-t dark:border-gray-800">
            <div className="m,ax-w-4xl text-center mx-auto pb-12 md:pb-12">
              <h2 className="text-indigo-600 uppercase text-base font-semibold">
                our solution
              </h2>
              <h1 className="text-6xl font-semibold text-white">
                End-to-End, Customizable Setup
              </h1>
              <p className="mt-5 max-w-4xl text-xl text-gray-500 lg:mx-auto">
                Testimonial offers an agency-dedicated plan to help grow your
                business. You will have the best platform you need to handle
                testimonial collection, easy to use for you, your clients, and
                theirs!
              </p>
            </div>
            <div className="grid gap-20 sm:gap-40">
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                  <img
                    className="max-w-full mx-auto md:max-w-none h-100 mt-3 rounded-lg shadow-2xl"
                    src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Fyour-space-light.jpg?alt=media&token=6f8d3e4d-5c4e-410f-b21e-2c4690e7afa3"
                    alt=""
                  />
                </div>
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:pr-4 lg:pr-12 xl:pr-16">
                  <h1 className="mb-2 text-xl text-indigo-600 font-semibold">
                    Quick to setup
                  </h1>
                  <h3 className="mb-3 text-4xl text-white font-semibold">
                    Get a dedicated landing page in less than two minutes
                  </h3>
                  <p className="text-lg text-gray-500 mb-4 dark:text-gray-400">
                    Create a Testimonial space for each client. It will generate
                    a dedicated landing page with a unique link for collecting
                    testimonials. Share the link easily via email, social media,
                    or even SMS. Setup can be done in two minutes.
                  </p>
                </div>
              </div>
              <div className="md:grid md:grid-cols-12 md:gap-25 items-center">
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl">
                  <img
                    loading="lazy"
                    className="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-2xl"
                    src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Fcollect-messages-light.jpg?alt=media&amp;token=d1710ed1-e238-4dad-862f-1dcb1e49a692"
                    width="540"
                    height="405"
                    alt="Testimonial dashboard"
                  ></img>
                </div>
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:pb-4 lg:pb-12 xl:pb-16">
                  <h1 className="text-lg text-indigo-600 font-semibold">Easy to manage </h1>
                  <h3 className="text-white text-4xl font-semibold mt-4">Manage testimonials all in one place</h3>
                  <p className="text-xl text-gray-600 mt-5">Testimonial offers a simple dashboard to manage testimonials for each client in each space. Testimonials that got submitted will directly go into the space associated with that unique link. Each client has their own space, and will manage their own testimonial content.</p>
                </div>
              </div>
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                  <img
                    className="max-w-full mx-auto md:max-w-none h-140 mt-3 rounded-lg shadow-2xl"
                    src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Fembed-code.png?alt=media&token=c91b8990-473c-40dd-9835-e54705a68a60"
                    alt=""
                  />
                  <button className="animate-bounce mt-4 flex mx-auto text-sm text-gray-700 dark:text-gray-200 font-semibold hover:underline">👉 Try our embed code for the wall of love</button>
                </div>
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:pr-4 lg:pr-12 xl:pr-16">
                  <h1 className="mb-2 text-xl text-indigo-600 font-semibold">
                    No-code integration
                  </h1>
                  <h3 className="mb-3 text-4xl text-white font-semibold">
                   Integrate the Wall of Love with no code
                  </h3>
                  <p className="text-lg text-gray-500 mb-4 dark:text-gray-400">
                   With Testimonial, you can copy and paste our 3-line HTML code to add the Wall Of Love to your client's website in under a minute. No coding knowledge required!
                  </p>
                  <Link className="text-gray-200 underline text-lg " to={'/intetgration'}>See our Integrations page ➡</Link>
                </div>
              </div>
              <div className="md:grid md:grid-cols-12 md:gap-25 items-center">
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl">
                  <img
                    loading="lazy"
                    className="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-2xl"
                    src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Finvite-clients.png?alt=media&token=42c4bdb1-a0fd-4e6c-88dc-cc52c5926aa1"
                    width="540"
                    height="405"
                    alt="Testimonial dashboard"
                  ></img>
                </div>
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:pb-4 lg:pb-12 xl:pb-16">
                  <h1 className="text-lg text-indigo-600 font-semibold">Invite clients </h1>
                  <h3 className="text-white text-4xl font-semibold mt-4">Engage your clients fast</h3>
                  <p className="text-xl text-gray-600 mt-5">Share the space access with your clients. Let your clients review testimonials before they are published. It saves lots of back-and-forth conversations and will make sure both you and your clients are always on the same page!</p>
                </div>
              </div>
               <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                  <img
                    className="max-w-full mx-auto md:max-w-none h-140 mt-3 rounded-lg shadow-2xl"
                    src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Fvideo-metrics.png?alt=media&token=6ed1cef0-b394-4765-bcb2-438003080597"
                    alt=""
                  />
                </div>
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:pr-4 lg:pr-12 xl:pr-16">
                  <h1 className="mb-2 text-xl text-indigo-600 font-semibold">
                   Track the metrics
                  </h1>
                  <h3 className="mb-3 text-4xl text-white font-semibold">
                   Understand how video testimonials are performing
                  </h3>
                  <p className="text-lg text-gray-500 mb-4 dark:text-gray-400">
                   Track the metrics from all embedded videos, helping you and your client understand the performance of all video testimonials at a glance. Based on the result, you can drag and drop the highest performing videos to the top of the Wall of Love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative ">
          <div className="pt-20 max-w-4xl mx-auto text-center pb-12 md:pb-12">
            <h1 className="mb-4 text-white text-5xl font-semibold ">Ready to upsell Testimonial service to gain more recurring revenue?</h1>
            <p className="text-xl text-gray-500 ">Your clients need testimonials to sell more. Let's make it happen!</p>
            <ul className="my-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
              <li className="flex justify-center lg:justify-end lg:col-span-1 gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>
                <p className="text-gray-300">7 days free trial</p>
              </li>
              <li  className="flex justify-center lg:justify-start lg:col-span-1 gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>
                <p className="text-gray-300">Cancel anytime</p>
              </li>
            </ul>
            <div className="flex justify-center mb-2">
              <Button className="bg-indigo-600 p-5 uppercase text-white" variant="outline">try it now </Button>
            </div>
             <Link className="underline text-gray-500" to={'/pricing'}>See our pricing →</Link>
          </div>
        </div> 
      </div>
      <div className="bg-neutral-900">
          <div className="py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid md:grid-cols-12 gap-8 lg:gap-20">
                <div className="md:col-span-3 lg:col-span-4">
                  <div className="mb-2">
                    <a className="inline-block" href="/" aria-label="Cruip">
                      <img
                        loading="lazy"
                        className="h-10 fill-current text-purple-600"
                        src="/logo.svg"
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <div className="text-gray-400">
                    The easiest solution to getting text and video testimonials
                    from your customers
                  </div>
                </div>
                <div className="md:col-span-6 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8"> 
                  <div className="text-sm">
                    <h6 className="text-gray-200 font-semibold uppercase mb-1">
                      products
                    </h6>
                    <ul>
                      {listOne.map((one, ind)=>(
                        <li key={ind} className="mb-1">
                        <Link
                          className=" text-gray-400 hover:text-gray-100  transition duration-150 ease-in-out"
                          to={one.to}
                        >
                          {one.title}
                        </Link>
                      </li>
                      ))}
                      
                    </ul>
                  </div>
                  <div className="text-sm">
                    <h6 className="text-gray-200 font-semibold uppercase mb-1">
                      resources
                    </h6>
                    <ul>
                      {listTwo.map((two, ind)=>(
                        <li key={ind} className="mb-1">
                        <Link
                        to={two.to}
                          target="_blank"
                          className="text-gray-400 hover:text-gray-100  transition duration-150 ease-in-out cursor-pointer"
                        >
                          {two.title}
                        </Link>
                      </li>
                      ))}
                      <Button className="text-gray-400 hover:text-gray-100   duration-150 ease-in-out cursor-pointer mb-1">Contact us</Button>
                    </ul>
                  </div>
                  <div className="text-sm">
                    <h6 className="text-gray-200 font-semibold uppercase mb-1">
                      customers
                    </h6>
                    <ul>
                      <li className="mb-1">
                        <a
                          className=" text-gray-400 hover:text-gray-100  transition duration-150 ease-in-out"
                          href="/agency"
                        >
                          Agencies
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="text-sm">
                    <h6 className="text-gray-200 font-semibold uppercase mb-1">
                      free tools
                    </h6>
                    <ul>
                      <li className="mb-1">
                        <a
                          className=" text-gray-400 hover:text-gray-100  transition duration-150 ease-in-out"
                          href="/tools/case-study-generator"
                        >
                          Case study generator
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Agency;
