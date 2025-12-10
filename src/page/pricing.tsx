import Navabar from "../components/navabar";
import { Button } from "../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { Check, Minus } from "lucide-react";
import { plansData } from "../lib/constant";

function Pricing() {
  const renderCheckmark = (included: boolean) => {
    if (included) {
      return <Check className="h-5 w-5 text-green-500" />;
    }
    return <Minus className="h-5 w-5 text-gray-400" />;
  };
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
        <div className="max-w-7xl mx-auto">
          <div className="py-16 md:py-20 ">
            <div className="max-w-4xl mx-auto text-center pb-12">
              <h1 className="h1 text-5xl font-semibold mb-4 aos-init aos-animate">
                The eariest way to drive more sales for sales for your business
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-400 aos-init aos-animate ">
                <span className="text-gray-600 dark:text-gray-400 ">
                  start with 10 text textimonails and 2 video textimonails on
                  us, then upgrade to our paid plan only if your are happy
                </span>
              </p>
              <Button className="text-base mt-5 rounded-full text-amber-800 bg-amber-100  ">
                <span className="inline-flex items-center justify-center   px-4 py-2 font-semibold text-amber-800">
                  7 days free trail, cancel anytime
                </span>
              </Button>
            </div>
            <div className="flex justify-center mb-16">
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
                <div className="text-gray-500 dark:text-gray-300 font-medium ml-3">
                  Billed Yearly
                  <span className="hidden sm:inline-block ml-2 px-4 py-2 bg-green-100 text-green-800 hover:bg-green-100 rounded-full">
                    2 months off 🎁
                  </span>
                </div>
              </div>
            </div>
            <div className="pb-2  px-4 sm:px-6 lg:px-8 aos-init aos-animate">
              <div className="mt-24 md:gap-x-6 md:grid md:grid-cols-2 lg:space-y-0 lg:grid-cols-4 lg:gap-x-3">
                <div className="mb-6 lg:mb-0 relative py-8 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm flex flex-col">
                  <div className="flex-1">
                    <p className="text-2xl font-bold text-center">Starter</p>
                    <p className="mt-1 text-base text-gray-500 dark:text-gray-300 text-center">
                      For hobbies 🎁
                    </p>
                    <p className="mt-4 flex items-baseline text-gray-900 darK:text-white justify-center">
                      <span className="text-4xl tracking-tight font-extrabold text-white">
                        $0
                      </span>
                      <span className="ml-1 text-base font-semibold text-gray-500 dark:text-gray-300">
                        /month
                      </span>
                    </p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center">
                      (Forever free)
                    </p>
                    <p className="mt-6 font-bold text-gray-600 dark:text-gray-200">
                      Free forever, features include:
                    </p>
                    <div className="w-12 mb-4 border-b-4 border-purple-600"></div>
                    <ul role="list" className="mt-2 space-y-4">
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          1 space
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          2 video textimonails in total
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          10 text textimonails in total
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          Unlimited X, LinkedIn posts importing
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          Public Textimonial page
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          Wall of Love widget with our logo
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-6 block rounded-md bg-purple-50 hover:bg-purple-200 dark:bg-gray-700 dark:hover:bg-gray-900 w-full py-3 font-medium text-purple-700 dark:text-gray-200 text-center">
                    Get started
                  </Button>
                </div>
                <div className="mb-6 lg:mb-0 relative py-8 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm flex flex-col">
                  <div className="flex-1">
                    <p className="text-2xl font-bold text-center">
                      Starter Plus
                    </p>
                    <p className="mt-1 text-base text-gray-500 dark:text-gray-300 text-center">
                      For small teams 🏠
                    </p>
                    <p className="mt-4 flex items-baseline text-gray-900 darK:text-white justify-center">
                      <span className="text-4xl tracking-tight font-extrabold text-white">
                        $21
                      </span>
                      <span className="ml-1 text-base font-semibold text-gray-500 dark:text-gray-300">
                        /month
                      </span>
                    </p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center">
                      ($250 billed annully)
                    </p>
                    <p className="mt-6 font-bold text-gray-600 dark:text-gray-200">
                      Everything in starter, and
                    </p>
                    <div className="w-12 mb-4 border-b-4 border-purple-600"></div>
                    <ul role="list" className="mt-2 space-y-4">
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          Unlimited text textimonails
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          2 video textimonails in total
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          10+ other social media and review sites importing
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          AI case study generator
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          page localization
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          Remove our branding from all widgets
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          Custom domain (SSL)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-6 block rounded-md bg-purple-50 hover:bg-purple-200 dark:bg-gray-700 dark:hover:bg-gray-900 w-full py-3 font-medium text-purple-700 dark:text-gray-200 text-center">
                    👉 Start a free trial
                  </Button>
                </div>
                <div className="mb-6 lg:mb-0 relative py-8 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm flex flex-col">
                  <div className="flex-1">
                    <p className="text-2xl font-bold text-center">Premium</p>
                    <p className="mt-1 text-base text-gray-500 dark:text-gray-300 text-center">
                      For growimg bussiness 📈
                    </p>
                    <p className="absolute top-0 py-1.5 px-4 bg-purple-600 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                      Most popular
                    </p>
                    <p className="mt-4 flex items-baseline text-gray-900 darK:text-white justify-center">
                      <span className="text-4xl tracking-tight font-extrabold text-white">
                        $34
                      </span>
                      <span className="ml-1 text-base font-semibold text-gray-500 dark:text-gray-300">
                        /month/space
                      </span>
                    </p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center">
                      ($400 billed annully)
                    </p>
                    <p className="mt-6 font-bold text-gray-600 dark:text-gray-200">
                      Everything in Starter Plus, and:
                    </p>
                    <div className="w-12 mb-4 border-b-4 border-purple-600"></div>
                    <ul role="list" className="mt-2 space-y-4">
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          Unlimited text textimonails
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 border-b border-dotted dark:text-gray-400 ml-2 text-base">
                          500 automated monthly invitationas via T.E.A
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          3 minutes video time limit
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          Custom cards on Wall of Love
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          eGift cards integration
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 border-b border-dotted dark:text-gray-400 ml-2 text-base">
                          Portfolio page
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          RESTful API & Webhook
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          Zapier and Make integrations
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          2 account-level staff seats
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-6 block rounded-md bg-purple-50 hover:bg-purple-200 dark:bg-gray-700 dark:hover:bg-gray-900 w-full py-3 font-medium text-purple-700 dark:text-gray-200 text-center">
                    👉 Start a free trial
                  </Button>
                </div>
                <div className="mb-6 lg:mb-0 relative py-8 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm flex flex-col">
                  <div className="flex-1">
                    <p className="text-2xl font-bold text-center">UItimate</p>
                    <p className="mt-1 text-base text-gray-500 dark:text-gray-300 text-center">
                      For large bussiness 🚀
                    </p>
                    <p className="mt-4 flex items-baseline text-gray-900 darK:text-white justify-center">
                      <span className="text-4xl tracking-tight font-extrabold text-white">
                        $50
                      </span>
                      <span className="ml-1 text-base font-semibold text-gray-500 dark:text-gray-300">
                        /month/space
                      </span>
                    </p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center">
                      ($600 billed annully)
                    </p>
                    <p className="mt-6 font-bold text-gray-600 dark:text-gray-200">
                      Everything in Premium, and:
                    </p>
                    <div className="w-12 mb-4 border-b-4 border-purple-600"></div>
                    <ul role="list" className="mt-2 space-y-4">
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          Unlimited text textimonails
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 border-b border-dotted dark:text-gray-400 ml-2 text-base">
                          1000 automated monthly invitationas via T.E.A
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          5 minutes video time limit
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          Video metric insights
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          Sentiment analysis
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          Star rating snippest in Google search
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          HubSpot, Slack integrations
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          HubSpot, Slack integrations
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          3 space-level seats for each space
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          5 account-level staff seats
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-base">
                          Onboading assistance
                        </span>
                      </li>
                      <li className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 w-5 h-5 text-green-500 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-500 border-b border-dotted dark:text-gray-400 ml-2 text-base">
                          Pro video editing service (&500 value)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-6 block rounded-md bg-purple-50 hover:bg-purple-200 dark:bg-gray-700 dark:hover:bg-gray-900 w-full py-3 font-medium text-purple-700 dark:text-gray-200 text-center">
                    👉 Start a free trial
                  </Button>
                </div>
              </div>
              <div className="mt-4 relative max-w-7xl mx-auto lg:mt-10">
                <div className="w-full">
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-800 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                    <div className="flex-1">
                      <div>
                        <h3 className="inline-flex px-4 py-1 rounded-full text-base font-bold tracking-wide uppercase bg-white text-gray-800">
                          Custom plan
                        </h3>
                      </div>
                      <div className="mt-4 text-base font-bold text-gray-600 dark:text-gray-400">
                        Get custom space limit, unlimited automated invitations,
                        SAML Single Sign-On, enterprise-level support, custom
                        contract, payment via invoice/PO etc.
                      </div>
                    </div>
                    <div className="mt-6 rounded-md lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                      <button className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100">
                        Contact us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TooltipProvider>
            <div className="max-w-7xl mx-auto overflow-x-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/5 text-left">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-200">
                        Plans
                      </span>
                    </TableHead>
                    <TableHead className="w-1/5 text-left">
                      <p className="text-lg font-bold text-gray-900 dark:text-gray-200">
                        Starter
                      </p>
                    </TableHead>
                    <TableHead className="w-1/5 text-left">
                      <p className="text-lg font-bold text-gray-900 dark:text-gray-200">
                        Starter Plus
                      </p>
                    </TableHead>
                    <TableHead className="w-1/5 text-left">
                      <p className="text-lg font-bold text-gray-900 dark:text-gray-200">
                        Premium
                      </p>
                    </TableHead>
                    <TableHead className="w-1/5 text-left">
                      <p className="text-lg font-bold text-gray-900 dark:text-gray-200">
                        Ultimate
                      </p>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {plansData.map((plan, idx) => (
                    <TableRow
                      key={idx}
                      className={`${idx % 2 ? "bg-neutral-800/30" : ""}`}
                    >
                      <TableCell className="text-sm font-normal text-gray-500 dark:text-gray-300">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="cursor-pointer border-b border-dotted border-gray-300">
                              {plan.title}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs bg-neutral-600 p-3 rounded-2xl">
                            {plan.imageUrl && (
                              <img
                                className="w-full rounded-xl shadow-2xl mb-2"
                                src={plan.imageUrl}
                                alt={plan.title}
                              />
                            )}
                            <p className="text-sm font-medium text-gray-200">
                              {plan.description}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                      <TableCell>{renderCheckmark(plan.starter)}</TableCell>
                      <TableCell>{renderCheckmark(plan.starterPlus)}</TableCell>
                      <TableCell>{renderCheckmark(plan.premium)}</TableCell>
                      <TableCell>{renderCheckmark(plan.ultimate)}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow  >
                    <TableCell></TableCell>
                    <TableCell >
                      <Button className=" px-10 py-5  bg-purple-50  hover:bg-purple-200 dark:bg-gray-700 dark:hover:bg-gray-900 text-purple-700 dark:text-gray-200">
                        Get started
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button className="px-10 py-5 bg-purple-50 hover:bg-purple-200 dark:bg-gray-700 dark:hover:bg-gray-900 text-purple-700 dark:text-gray-200">
                        👉 Start a free trial
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button className="px-10 py-5 bg-purple-600 hover:bg-purple-800 text-white">
                        👉 Start a free trial
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button className="px-10 py-5 bg-purple-50 hover:bg-purple-200 dark:bg-gray-700 dark:hover:bg-gray-900 text-purple-700 dark:text-gray-200">
                        👉 Start a free trial
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TooltipProvider>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
