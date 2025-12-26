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
import { listFour, listOne, listThree, listTwo, plansData } from "../lib/constant";
import { Link } from "react-router-dom";

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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className="w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className="w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                          className=" w-5 h-5 text-green-500 my-auto"
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
                    <div className="mt-6 rounded-md lg:mt-0 lg:ml-10 ">
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
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
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
          <div className="pb-2 px-4 sm:px-6 lg:px-8 aos-init aos-animate py-12 md:py-20 dark:border-t dark:border-gray-800 relative">
            <div className="mx-auto text-center pb-6">
              <h2 className="h2 mb-4 aos-init aos-animate text-4xl font-bold">
                Our Wall of Love
              </h2>
              <p className="max-w-4xl mx-auto text-xl text-gray-600 dark:text-gray-400 mb-8 aos-init aos-animate ">
                We are loved by startups, marketing agencies, real estate
                agencies, freelancers, Fortune 500 companies and many more.
                <span className="bg-yellow-100 text-gray-900 font-semibold">
                  Our customers' testimonials are the best social proof we can
                  get!
                </span>
              </p>
              <Button className="border-0 bg-blue-900/60 p-6">
                <a href="/signup">Create your own Wall of Love </a>
              </Button>
            </div>
            <iframe
              title="iframe"
              src="https://embed-v2.testimonial.to/w/wall-of-love-for-testimonial?theme=dark&amp;card=base&amp;hideDate=on"
              id="iFrameResizer0"
              scrolling="no"
              style={
                {
                  width: "1px",
                  "min-width": "100%",
                  overflow: "hidden",
                  height: "4180px",
                } as React.CSSProperties
              }
            ></iframe>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 dark:border-t dark:border-gray-800">
            <div className="max-w-3xl mx-auto text-center pb-12">
              <h2 className="text-4xl font-bold">Frequently asked questions</h2>
            </div>
            <ul className="grid gap-8 md:grid-cols-2 xl:col-gap-12 lg:row-gap-1">
              <li>
                <h4 className="text-lg font-medium mb-2">
                  Can I add multiple spaces in one account?
                </h4>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  You certainly can! Depending on your needs, you can add up to
                  10 spaces in the Premium plan or an unlimited number of spaces
                  in the Ultimate plan. Keep in mind that additional spaces are
                  available at an add-on cost.
                </p>
              </li>
              <li>
                <h4 className="text-lg font-medium mb-2">
                  Is there any time limit for each video?
                </h4>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Yes! Every video has a limit. Free plan has a limit of 2
                  minutes, 3 minutes for the Premium plan and 5 minutes for the
                  Ultimate plan. It's more than enough to cover the whole
                  testimonial recording.{" "}
                </p>
              </li>
              <li>
                <h4 className="text-lg font-medium mb-2">
                  What happens after free credits are exhausted?
                </h4>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Your customers will not be blocked from submitting their
                  testimonials. However on your side, you need to upgrade to the
                  relavant plan to access additional text and video
                  testimonials.
                </p>
              </li>
              <li>
                <h4 className="text-lg font-medium mb-2">
                  What is the Wall of Love?
                </h4>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Wall of Love is a place to display all your selected
                  testimonials. They can be video, text or social proof like
                  Twitter shoutouts.
                  <span className="font-semibold text-white underline">
                    Here is the Wall of Love for our Testimonial product,
                  </span>
                  check it out!
                </p>
              </li>
              <li>
                <h4 className="text-lg font-medium mb-2">
                  How to embed the Wall of Love?
                </h4>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  It's just 3 lines of HTML code. You can embed it in any
                  no-code platform (Webflow, WordPress, you name it!)
                  <span className="text-white font-semibold underline">
                    You can find some samples here.
                  </span>
                </p>
              </li>
              <li>
                <h4 className="text-lg font-medium mb-2">
                  Can I get embed a single video to my site?
                </h4>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Yes, but only if you are our premium user! We provide embed
                  code for each video. It's just one-line code. You just copy
                  the code and place it in any no-code platform, like how you
                  embed the Wall of Love.
                </p>
              </li>
              <li>
                <h4 className="text-lg font-medium mb-2">
                  Can I download the video testimonials?
                </h4>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Yes! You can download all videos in MP4 format. You will have
                  a single page to manage all testimonials for each of your
                  products.{" "}
                </p>
              </li>
              <li>
                <h4 className="text-lg font-medium mb-2">
                  What information can I collect from my customer?
                </h4>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Apart from the testimonial, you can collect your customer's
                  name, headshot, email, title and company, social link. You can
                  also add up to 5 custom data to collect, e.g. phone number,
                  etc.
                </p>
              </li>
              <li>
                <h4 className="text-lg font-medium mb-2">
                  Do you offer discount?
                </h4>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Sure! We offer discounts for bootstrappers and non-profits. It
                  will only apply on the subscription plan. Please send us a
                  message with an intro to your business to get the discount
                  code.
                </p>
              </li>
              <li>
                <h4 className="text-lg font-medium mb-2">
                  Do you have any other question?
                </h4>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  No problem! Please send us your messages in our chatbox. We
                  will get back to you within a day.
                </p>
              </li>
            </ul>
          </div>
          <div className="border-t border-gray-700" >
            <div className="ml-20 py-12 md:py-16">
              <div className="max-w-7xl max-auto px-4 sm:px-6">
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
                      The easiest solution to getting text and video
                      testimonials from your customers
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
                            className=" text-gray-400 hover:text-gray-100  transition duration-150 ease-in-out"
                           to={two.to}
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
                        {listThree.map((three, ind)=>(
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
                        {listFour.map((four, ind)=>(
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
      </section>
    </div>
  );
}

export default Pricing;