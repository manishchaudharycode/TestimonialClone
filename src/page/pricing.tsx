import Navabar from "../components/navabar";
import { Button } from "../components/ui/button";

function Pricing() {
  return (
    <div
      className="font-inter antialiazed  bg-white text-neutral-900 dark:bg-neutral-900 dark:text-gray-100 tracking-tight"
      style={
        {
          poistion: "relative",
          "min-height": "100%",
          top: "40px",
        } as React.CSSProperties
      }
    >
      <div className="">
        <Navabar />
      </div>
      <section className="relative">
        <div className="max-w-7xl max-auto px-4 sm:px-6">
          <div className="pt-16 md:pt-20 ml-70">
            <div className="max-w-4xl max-anto text-center pb-12">
              <h1 className="h1 text-5xl font-semibold mb-4 aos-init aos-animate">
                The eariest way to drive more sales for sales for your business
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-400 aos-init aos-animate ">
                <span className="text-gray-600 dark:text-gray-400 ">
                  start with 10 text textimonails and 2 video textimonails on
                  us, then upgrade to our paid plan only if your are happy
                </span>
              </p>
              <Button className="text-base mt-5 text-gray-600 dark:text-gray-400 aos-init aos-animate ">
                <span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-4 py-2 font-semibold text-amber-800">
                  7 days free trail, cancel anytime
                </span>
              </Button>
            </div>
            <div className="flex justify-center mb-16 aos-init aos-animate">
              <div className="inline-flex items-center">
                <div className="text-gray-700 dark:text-gray-200 font-medium mr-3">
                  Billed Monthy
                </div>
                <div className="form-switch focus-within:none">
                  <input
                    type="checkbox"
                    name="pricing-toggle"
                    id="pricing-toggle"
                    className="bg-white px-2"
                    
                  />
                  <label className="bg-gray-600" form="pricing-toggle">
                    <span
                      className="bg-white dark:bg-gray-200"
                      aria-hidden="true"
                    ></span>
                  </label>
                </div>
                <div className="text-gray-500 dark:text-gray-300 font-medium ml-3">Billed Yearly
                  <span className="hidden sm:inline-block ml-2 px-4 py-2 bg-green-100 text-green-800 hover:bg-green-100 rounded-full">2 months off  🎁</span>
                </div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto pb-8 px-4 sm:px-6 lg:px-8 aos-init aos-animate">
                <div className="mt-24 md:gap-x-6 md:grid md:grid-cols-2 lg:space-y-0 lg:grid-cols-4 lg:gap-x-3">
                  <div className="mb-6 lg:mb-0 relative py-8 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm flex flex-col">
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-center">Starter</p>
                      <p className="mt-1 text-base text-gray-500 dark:text-gray-300 text-center">For hobbies 🎁</p>
                      <p className="mt-4 flex items-baseline text-gray-900 darK:text-white justify-center">
                        <span className="text-4xl tracking-tight font-extrabold">$0</span>
                        <span className="ml-1 text-base font-semibold text-gray-500 dark:text-gray-300">/month</span>
                      </p>
                    </div>
                    <Button></Button>
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="mt-4 relative max-w-7xl mx-auto lg:mt-10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
