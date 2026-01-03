import { Link } from "react-router-dom"
import Navabar from "../components/navabar"


function EcommerceRetail() {
  return (
    <div className="bg-neutral-900 h-screen">
        <div>
            <Navabar/>
        </div>
        <div className="bg-neutral-600/70 relative overflow-hidden pb-12">
        <div className="relative pt-6 pb-16 sm:pb-24 mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-4 lg:mt-32 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-4 flex  sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>

            <p className="text-lg text-gray-100 font-semibold">Our customers</p>
             <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"><span className="md:block text-white">Leverage your social proof</span></h1>
             <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Testimonial makes collecting text and video testimonials fast and easy for any business who needs social proof.</p>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                <p className="text-base text-purple-600 font-semibold">Businesses</p>
                <Link to="https://testimonial.to/customers#b2b-companies" className="-m-3 p-3 flex items-start rounded-lg dark:hover:bg-gray-900 transition ease-in-out duration-150 hover:bg-purple-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                   <div className="ml-4">
                    <p className="text-base font-semibold text-gray-900 dark:text-gray-200">B2B companies</p>
                   </div>
                </Link>
                <Link to="https://testimonial.to/customers#ecommerce-retail" className="-m-3 p-3 flex items-start rounded-lg dark:hover:bg-gray-900 transition ease-in-out duration-150 hover:bg-purple-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                       <div className="ml-4"><p className="text-base font-semibold text-gray-900 dark:text-gray-200">eCommerce &amp; retails</p></div>
                </Link>
                <Link to="https://testimonial.to/customers#agency-freelancer" className="-m-3 p-3 flex items-start rounded-lg dark:hover:bg-gray-900 transition ease-in-out duration-150 hover:bg-purple-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg><div className="ml-4"><p className="text-base font-semibold text-gray-900 dark:text-gray-200">Agencies &amp; freelancers</p></div>
                </Link>
                <Link to="https://testimonial.to/customers#course-creators" className="-m-3 p-3 flex items-start rounded-lg dark:hover:bg-gray-900 transition ease-in-out duration-150 hover:bg-purple-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" h-6 w-6 text-purple-600"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg><div className="ml-4"><p className="text-base font-semibold text-gray-900 dark:text-gray-200">Course creators</p></div>
                </Link>
                <Link to="https://testimonial.to/customers#consumer-apps" className="-m-3 p-3 flex items-start rounded-lg dark:hover:bg-gray-900 transition ease-in-out duration-150 hover:bg-purple-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg><div className="ml-4"><p className="text-base font-semibold text-gray-900 dark:text-gray-200">Consumer apps</p></div>
                </Link>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        </div>
        <div className="relative overflow-hidden">
          <div className=""></div>
          <div id="b2b-companies" className="realtive bg-white dark:bg-gray-900 lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div></div>
            <div></div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
  )
}

export default EcommerceRetail