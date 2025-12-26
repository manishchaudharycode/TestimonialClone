
import { Link } from "react-router-dom"
import Navabar from "../components/navabar"
import { featuresData, listFour, listOne, listThree, listTwo } from "../lib/constant"


function Features() {
  return (
    <div className="bg-neutral-900 h-screen ">
        <div>
            <Navabar/>
        </div>
        <div className="bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20 dark:border-t ml-30 dark:border-gray-800">
              <div className="max-w-4xl mx-auto text-center  pb-12 md:pb-12">
                <h1 className="h1 mb-4 aos-init aos-animate text-5xl font-semibold text-white">
                  Collect and display textimonails all the in one solution{" "}
                </h1>
              </div>
              <div className="relative overflow-hidden">
                <div id="b2b-companies" className="relative">
                  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0">
                      <div>
                        <div className="pt-6">
                          <div className="font-semibold text-xl text-purple-600 mb-2">
                            Quick to setup
                          </div>
                          <h3 className="h3 mb-3 text-white text-4xl">
                            A dedicated landing page
                          </h3>
                          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                            Create a dedicated landing page for your business.
                            Share the page link easily via email, social media,
                            or even SMS. Setup can be done in two minutes.
                          </p>
                          <div className="mt-6">
                            <a
                              href="/pricing"
                              target="_blank"
                              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
                            >
                              Try it for free
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-auto">
                      <div className="p-4">
                        <img
                          loading="lazy"
                          src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2Flanding-page.png?alt=media&amp;token=269a1a1c-4539-4d94-aa9e-ed0425eb1fce"
                          width="540"
                          height="405"
                          alt="quick to set up"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="agency-freelancer">
                  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                      <div>
                        <div className="pt-6">
                          <div className="font-semibold text-xl text-purple-600 mb-2">
                            Easy to manage
                          </div>
                          <h3 className="h3 mb-3 text-white text-4xl font-bold">
                            A dashboard to manage all testimonials
                          </h3>
                          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                            You will have a simple &amp; clean dashboard to
                            manage all testimonials in one place. It's like your
                            email inbox, but it's designed for your social
                            proof!
                          </p>
                          <div className="mt-6">
                            <a
                              href="/pricing"
                              target="_blank"
                              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
                            >
                              <h1 className="">Try it for free</h1>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-auto lg:col-start-1">
                      <div className="p-4">
                        <img
                          loading="lazy"
                          className="mt-10 mx-auto relative lg:mt-0 "
                          src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2FEasy%20to%20manage%20(1).png?alt=media&amp;token=5d3ae5f2-e35b-4e35-8070-acde541c18ec"
                          width="540"
                          alt="easy to manage"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="ecommerce-retail" className="relative">
                  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0">
                      <div>
                        <div className="pt-6">
                          <div className="font-semibold text-xl text-purple-600 mb-2">
                            Track the metrics
                          </div>
                          <h3 className="h3 mb-3 text-4xl text-white font-bold">
                            Understand how video testimonials are performing
                          </h3>
                          <p className="my-4 text-lg text-gray-500 dark:text-gray-400">
                            Track the metrics from all embedded videos, help
                            your marketing team understand the performance at a
                            glance, even promote the best-performing videos to
                            different marketing channels.
                          </p>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-300 mb-4">
                            * Available in the Ultimate plan
                          </p>
                          <div className="mt-6">
                            <a
                              href="/pricing"
                              target="_blank"
                              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
                            >
                              <h1>Try it for free</h1>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-auto">
                      <div className="p-4">
                        <img
                          loading="lazy"
                          className="mt-10 mx-auto relative lg:mt-0 "
                          src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2Fmetrics.png?alt=media&amp;token=c5aa1272-4d36-4f9f-8ee6-df660985e7e1"
                          width="540"
                          alt="track video metrics"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="consumer-apps">
                  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                      <div>
                        <div className="pt-6">
                          <div className="font-semibold text-xl text-purple-600 mb-2">
                            More social proof
                          </div>
                          <h3 className="h3 mb-3 text-white font-bold text-4xl">
                            Not only text and video testimonials
                          </h3>
                          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                            If you have testimonials on social media (e.g.
                            Twitter, LinkedIn, TikTok etc), video hosting
                            platforms (e.g. YouTube, Vimeo), and other review
                            sites (e.g. G2, Google, Capterra, Yelp etc), bring
                            them all to your account. Testimonial helps you
                            manage all your social proof in a single place!
                          </p>
                          <div className="mt-6">
                            <a
                              href="/pricing"
                              target="_blank"
                              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
                            >
                              <h1>Try it for free</h1>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-auto lg:col-start-1">
                      <div className="p-4">
                        <img
                          loading="lazy"
                          className="mt-10 mx-auto relative lg:mt-0 "
                          src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2Fmore-social-proof.png?alt=media&amp;token=83a1a3e9-449d-457d-80fb-0cfa55484700"
                          width="540"
                          alt="More social proof"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="course-creators" className="relative">
                  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0">
                      <div>
                        <div className="pt-6">
                          <div className="font-semibold text-xl text-purple-600 mb-2">
                            Embed the Wall of Love
                          </div>
                          <h3 className="h3 mb-3 text-4xl text-white font-bold">
                            The best testimonials all in one place
                          </h3>
                          <p className="my-4 text-lg text-gray-500 dark:text-gray-400">
                            Treat the Wall of Love as the place to showcase all
                            your favorite testimonials. You can embed it to your
                            website in under a minute. No coding knowledge
                            required!
                          </p>
                          <a
                            className="underline  font-semibold text-xl text-gray-700 dark:text-gray-200"
                            href="/wall-of-love"
                          >
                            See our Wall of Love in action 👉
                          </a>
                          <div className="mt-6">
                            <a
                              href="/pricing"
                              target="_blank"
                              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
                            >
                              <h1>Try it for free</h1>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-auto">
                      <div className="p-4">
                        <img
                          loading="lazy"
                          className="mt-10 mx-auto relative lg:mt-0 "
                          src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2Fwall-of-love.png?alt=media&amp;token=74e955e5-a21b-4cc6-ab05-d497b7fb313a"
                          width="540"
                          alt="all in one wall of love"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="consumer-apps">
                  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                      <div>
                        <div className="pt-6">
                          <div className="font-semibold text-xl text-purple-600 mb-2">
                            Embed a single video testimonial
                          </div>
                          <h3 className="h3 mb-3 text-4xl text-white font-bold">
                            Ad-free hosting for each video
                          </h3>
                          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                            For the video testimonial, you can embed it directly
                            on your own website like this 👈. You don't need to
                            use any 3rd-party Ad-free hosting service, e.g.
                            Wistia, Vimeo.
                          </p>
                          <div className="mt-6">
                            <a
                              href="/pricing"
                              target="_blank"
                              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
                            >
                              Try it for free
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-auto lg:col-start-1">
                      <div className="p-4">
                        <iframe
                          width="540px"
                          height="405px"
                          src="https://embed-v2.testimonial.to/v/64896fee-2a36-4f0d-945c-28a073e0fc38?subtitle=on&amp;animated=on"
                          scrolling="no"
                          frameBorder={"0"}
                          allowFullScreen
                          style={{ "max-width": "100%" } as React.CSSProperties}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 bg-neutral-900 sm:py-16 lg:py-20">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-6xl text-center ">
            <div className="text-center">
              <h1 className="h1 text-gray-200 text-7xl font-bold">
                Integrate with any platform
              </h1>
              <p className="mt-4 max-w-4xl mx-auto text-xl text-gray-400">
                We built the ultimate tool for showcasing your satisfied
                customers. With 3-lines of HTML code, you can embed all your
                testimonials to any platform!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-12 sm:gap-6 lg:mt-16 lg:grid-clos-4">
              <div className="overflow-hidden  border border-gray-800 rounded-xl">
                <div className="flex items-center justify-center px-8 py-4 bg-white">
                  <img
                    className="object-contain h-8 max-w-full sm:h-10 w-44 bg-white"
                    src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Fintegrations%2Fwebflow.png?alt=media&amp;token=c9e4e238-3200-49a4-9147-c97dd8db1108"
                    alt="Webflow"
                  />
                </div>
              </div>
              <div className="overflow-hidden  border border-gray-800 rounded-xl">
                <div className="flex items-center justify-center px-8 py-4 bg-white">
                  <img
                    className="object-contain h-8 max-w-full sm:h-10 w-44 bg-white"
                    src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Fintegrations%2Fshopify-logo.png?alt=media&amp;token=fee7c8d9-a41e-433e-b37b-8704417d1827"
                    alt="Shopify"
                  />
                </div>
              </div>
              <div className="overflow-hidden  border border-gray-800 rounded-xl">
                <div className="flex items-center justify-center px-8 py-4 bg-white">
                  <img
                    className="object-contain h-8 max-w-full sm:h-10 w-44 bg-white"
                    src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Fintegrations%2Fcarrd-logo.png?alt=media&amp;token=8bbafb5e-e33e-4dab-9fea-6e5f5eb37cf9"
                    alt="Carrd"
                  />
                </div>
              </div>
              <div className="overflow-hidden  border border-gray-800 rounded-xl">
                <div className="flex items-center justify-center px-8 py-4 bg-white">
                  <img
                    className="object-cover h-8 max-w-full sm:h-10 w-56 bg-white"
                    src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Fintegrations%2Fwordpress-logo.png?alt=media&amp;token=badfe040-7a96-40af-948b-a16c2586a8ec"
                    alt="WordPress"
                  />
                </div>
              </div>
              <div className="overflow-hidden  border border-gray-800 rounded-xl">
                <div className="flex items-center justify-center px-8 py-4 bg-white">
                  <img
                    className="object-contain h-8 max-w-full sm:h-10 w-44 bg-white"
                    src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Fintegrations%2Fkajabi-logo.svg?alt=media&amp;token=1bf05142-b84d-4513-9653-03c61b79fd24"
                    alt="Besides"
                  />
                </div>
              </div>
              <div className="overflow-hidden  border border-gray-800 rounded-xl">
                <div className="flex items-center justify-center px-8 py-4 bg-white">
                  <img
                    className="object-contain h-8 max-w-full sm:h-10 w-44 bg-white"
                    src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Fintegrations%2Fbubble-logo.svg?alt=media&amp;token=2985b54a-d6cf-4d24-a219-95c48996fa34"
                    alt="Bubble"
                  />
                </div>
              </div>
              <div className="overflow-hidden  border border-gray-800 rounded-xl">
                <div className="flex items-center justify-center px-8 py-4 bg-white">
                  <img
                    className="object-contain h-8 max-w-full sm:h-10 w-44 bg-white"
                    src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Fintegrations%2Fframer-logo.png?alt=media&amp;token=30f72e56-ca63-40a3-8ce3-7c9ecd09fd15"
                    alt="Framer"
                  />
                </div>
              </div>
              <div className="overflow-hidden  border border-gray-800 rounded-xl">
                <div className="flex items-center justify-center px-8 py-4 bg-white">
                  <img
                    className="object-cover h-8 max-w-full sm:h-10 w-44 bg-white"
                    src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Fintegrations%2Fsquarespace-logo-horizontal-black.jpeg?alt=media&amp;token=e4227cfe-c88b-4aa1-bbc5-444a10410789"
                    alt="squarespace"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8 sm:mt-12 lg:mt-16">
              <div className="inline-flex flex-col items-center">
                <a
                  href="/integrations"
                  title=""
                  className="text-base font-semibold underline text-gray-400"
                >
                  {" "}
                  ✨ See all 100+ integrations{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-neutral-900  ">
           <div className="max-w-6xl mx-auto px-4 sm:px-4 border-t border-gray-600 py-12 md:py-20">
              <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="text-gray-200 text-5xl font-semibold">Everything you need to leverage testimonials</h2>
                <p className="text-2xl mt-4 text-gray-500 font-semibold">We support all these features for you to collect and manage all testimonials. Features with the lock are only available for the paid plans.</p>
              </div>
              <div className="grid max-w-sm mx-auto gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none">
                {featuresData.map((features, idx) =>(
                  <div key={idx} className="relative flex flex-col items-center mx-auto">
                    <h2 className="text-green-600" >
                        <svg xmlns={features.svgUrl} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </h2>
                    <h4 className="mb-2 text-2xl text-gray-300 font-semibold">{features.titleF}</h4>
                    <p className="text-lg text-gray-500">{features.subTitle}</p>
                </div>
                ))}
                
                {/* <div className="relative flex flex-col items-center mx-auto">
                    <h2 className="text-green-600" > 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </h2>
                    <h4 className="mb-2 text-2xl text-gray-300 font-semibold">Embeddable Wall of love</h4>
                    <p className="text-lg text-gray-500">It's a page to show all your selected testimonials. You can even add the whole wall to your own site with an iframe embed code.</p>
                </div>
                <div className="relative flex flex-col items-center mx-auto">
                    <h2 className="text-green-600" > 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </h2>
                    <h4 className="mb-2 text-2xl text-gray-300 font-semibold">Dashboard page</h4>
                    <p className="text-lg text-gray-500">You will have a dashboard page to manage all your spaces. You can add/update/remove the space as you want.</p>
                </div>
                <div className="relative flex flex-col items-center mx-auto">
                    <h2 className="text-green-600" > 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </h2>
                    <h4 className="mb-2 text-2xl text-gray-300 font-semibold">Video download</h4>
                    <p className="text-lg text-gray-500">You will have the access to download the video in the MP4 format with its original resolution.</p>
                </div>
                <div className="relative flex flex-col items-center mx-auto">
                    <h2 className="text-green-600" > 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </h2>
                    <h4 className="mb-2 text-2xl text-gray-300 font-semibold">Video embed</h4>
                    <p className="text-lg text-gray-500">One-line embed code is available for each video. You can paste it in any no-code platform. We take care of all hosting and streaming.</p>
                </div>
                <div className="relative flex flex-col items-center mx-auto">
                    <h2 className="text-green-600" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path></svg>
                    </h2>
                    <h4 className="mb-2 text-2xl text-gray-300 font-semibold">Your video message</h4>
                    <p className="text-lg text-gray-500">You can add your own video in the space page. It's more personal and may help encourage customers send you their best shoutouts.</p>
                </div>
                <div className="relative flex flex-col items-center mx-auto">
                    <h2 className="text-green-600" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path></svg>
                    </h2>
                    <h4 className="mb-2 text-2xl text-gray-300 font-semibold">Custom domain</h4>
                    <p className="text-lg text-gray-500">You can add the custom domain for each space. The link can be testimonial.your-product.com, or whatever you like.</p>
                </div>
                <div className="relative flex flex-col items-center mx-auto">
                    <h2 className="text-green-600" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path></svg>
                    </h2>
                    <h4 className="mb-2 text-2xl text-gray-300 font-semibold">Custom color</h4>
                    <p className="text-lg text-gray-500">You can add a custom color for buttons to make it more fit into your own brand.</p>
                </div>
                <div className="relative flex flex-col items-center mx-auto">
                    <h2 className="text-green-600" > 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </h2>
                    <h4 className="mb-2 text-2xl text-gray-300 font-semibold">Dark or light theme</h4>
                    <p className="text-lg text-gray-500">You can choose dark or light theme for the product page to better fit your website style.</p>
                </div> */}
              </div>
           </div>
        </div>
        <div className="bg-neutral-800">
          <div className="mx-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-20">
              <div className="max-w-3xl mx-auto text-center pb-12  md:pb-16">
                <h1 className="h2 mb-4 text-4xl font-bold text-gray-200">
                  Ready to collect textimonails?
                </h1>
                <p className="text-xl text-gray-400  mb-8">
                  We are loved by Fortune 500 companies, early-stage startups,
                  marketing agencies, real estate agents, freelancers, and many
                  more. Your customers' testimonials are the best social proof
                  you can get! Get started now 👇
                </p>
                <ul
                  role="list"
                  className=" my-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                >
                  <li className="flex justify-center  lg:justify-end lg:col-span-1">
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-200">
                      No coding skill required.
                    </p>
                  </li>
                  <li className="flex justify-center lg:justify-start lg:col-span-1">
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-green-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-200">
                      Start in under 2 minutes. \
                    </p>
                  </li>
                </ul>
                <div>
                  <div>
                    <div className="sm:flex sm:gap-4 ml-40">
                      <a
                        className="btn text-white bg-purple-600 hover:bg-purple-700 rounded-md transform hover:scale-105 px-4 py-5"
                        href="/pricing"
                      >
                        Get started with FREE credits
                      </a>
                      <button className="btn px-4 py-5   text-gray-800 dark:text-gray-100 border-2 border-purple-600 transform hover:scale-105 w-full mb-4 sm:w-auto flex sm:mb-0 rounded-md">
                        Talk to us{" "}
                        <div className="flex -space-x-1 ml-2">
                          <img
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800"
                            src="https://static.intercomassets.com/avatars/4996770/square_128/damonchen-1682480142.png"
                            alt="Damon"
                          />
                          <img
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800"
                            src="https://static.intercomassets.com/avatars/6509827/square_128/341944231_244267294764026_7612519450811596779_n-1682481732.jpg"
                            alt="Rachel"
                          />
                          <img
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-black"
                            src="https://static.intercomassets.com/assets/default-avatars/fin/128-c20968b22ed168a498a4bf28ebadc7e883bd4b8c2dba719cb4c661a2c15147f5.png"
                            alt="END"
                          />
                          <img
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-black"
                            src="https://static.intercomassets.com/avatars/7208079/square_128/photo-1710430300.jpg"
                            alt="Daniel"
                          />
                        </div>
                      </button>
                    </div>
                    <a
                      href="/pricing"
                      className="font-semibold text-white mt-5 underline decoration-2 underline-offset-4 decoration-gray-500 "
                    >
                      See our pricing →
                    </a>
                  </div>
                </div>
              </div>
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
                      {listOne.map((one , ind) =>(
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
                      {listTwo.map((two, ind) =>(
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
                      
                    </ul>
                  </div>
                  <div className="text-sm">
                    <h6 className="text-gray-200 font-semibold uppercase mb-1">
                      customers
                    </h6>
                    <ul>
                      {listThree.map((three, ind) =>(
                        <li key={ind} className="mb-1">
                        <Link
                          className=" text-gray-400 hover:text-gray-100  transition duration-150 ease-in-out"
                          to={three.to}
                        >
                          {three.title}
                        </Link>
                      </li>
                      ))}
                      
                    </ul>
                  </div>
                  <div className="text-sm">
                    <h6 className="text-gray-200 font-semibold uppercase mb-1">
                      free tools
                    </h6>
                    <ul>
                      {listFour.map((four, ind) =>(
                        <li key={ind} className="mb-1">
                        <Link
                          className=" text-gray-400 hover:text-gray-100  transition duration-150 ease-in-out"
                          to={four.to}
                        >
                          {four.title}
                        </Link>
                      </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Features