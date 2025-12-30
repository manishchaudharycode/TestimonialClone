import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

function Navabar() {
  return (
    <div className="flex items-center justify-between  border-b border-neutral-500/30 pb-12 ">
      <div className="mt-5 ml-23 ">
        <Link to={"/"}>
          <img className="h-10" loading="lazy" src="/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="grid mt-4 ">
        <ul className="flex  gap-4 text-white">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white mb-2">
              Customers
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="flex gap-6  ">
                <div className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-7 w-7 text-gray-600 group-hover:text-purple-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                    ></path>
                  </svg>
                </div>
                <div className="my-auto">
                  <Link to="/agency" className=" text-gray-100   font-bold">
                    Agencies<span className="absolute inset-0"></span>
                  </Link>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex gap-6">
                <div className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg  bg-gray-100 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-7 w-7 text-gray-600 group-hover:text-purple-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    ></path>
                  </svg>
                </div>
                <div className="my-auto">
                  <Link
                    to="/customers-ecommerce-retail"
                    className="text-gray-100  font-bold"
                  >
                    eCommerce &amp; Retails
                    <span className="absolute inset-0"></span>
                  </Link>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-6">
                <div className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg  bg-gray-100 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-7 w-7 text-gray-600 group-hover:text-purple-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    ></path>
                  </svg>
                </div>
                <div className="my-auto">
                  <Link
                    to="/customers#course-creator"
                    className=" text-gray-100 font-bold"
                  >
                    Course Creators<span className="absolute inset-0"></span>
                  </Link>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-6">
                <div className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg  bg-gray-100 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-7 w-7 text-gray-600 group-hover:text-purple-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    ></path>
                  </svg>
                </div>
                <div className="my-auto">
                  <Link
                    to="/customers/b2b"
                    className="text-gray-200 over:text-gray-100  font-semibold"
                  >
                    B2B Companies<span className="absolute inset-0"></span>
                  </Link>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-6">
                <div className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg  bg-gray-100 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-7 w-7 text-gray-600 group-hover:text-purple-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    ></path>
                  </svg>
                </div>
                <div className="my-auto">
                  <Link
                    to="/customers#consumer-apps"
                    className="text-gray-200 over:text-gray-100  font-semibold"
                  >
                    B2C Apps<span className="absolute inset-0"></span>
                  </Link>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to={"/features"}>
            <li className="text-gray-200 hover:text-gray-100 font-semibold px-4 py-2 flex items-center transition duration-150">
              Features
            </li>
          </Link>
          <Link to={"/integrations"}>
            <li className="text-gray-200 hover:text-gray-100 font-semibold px-4 py-2 flex items-center transition duration-150">
              Integrations
            </li>
          </Link>
          <Link to={"/pricing"}>
            <li className="text-gray-200 hover:text-gray-100 font-semibold px-4 py-2 flex items-center transition duration-150">
              Pricing
            </li>
          </Link>
          <li className="text-gray-200 hover:text-gray-100 font-semibold px-4 py-2 flex items-center transition duration-150 gap-2">
            <img className="h-7 mt-1" src="/us.svg" alt="" />
            En
          </li>
        </ul>
      </div>
      <div className="flex gap-6 mt-5 mr-24 ">
        <Button className="text-gray-100 font-semibold ">
          <Link to={"/signin"}>Login</Link>
        </Button>
        <Button className="text-gray-100 font-semibold bg-blue-900/60">
          <Link to={"/signup"}>Sign Up</Link>
        </Button>
      </div>
    </div>
  );
}

<div className="group relative flex gap-x-4 rounded-lg p-4 hover:bg-gray-900"></div>;

export default Navabar;
