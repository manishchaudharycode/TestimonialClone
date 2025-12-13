import { Button } from "../components/ui/button"
import { Link } from "react-router-dom";

function Navabar() {
  return (
    <div className="flex items-center justify-between  border-b border-neutral-500/30 pb-12 ">
      <div className="mt-5 ml-23 ">
       <Link to={'/'}><img className="h-10" loading="lazy" src="/logo.svg" alt="logo" /></Link>
        </div>
        <div className="grid mt-4 ">
          <ul className="flex  gap-4">
            <li className="text-gray-200 hover:text-gray-100 font-semibold px-4 py-2 flex items-center transition duration-150">
              Customers
            </li>
            <Link to={'/features'}>
              <li className="text-gray-200 hover:text-gray-100 font-semibold px-4 py-2 flex items-center transition duration-150">
              Features
            </li>
            </Link>
            <Link to={'/integrations'}>
             <li className="text-gray-200 hover:text-gray-100 font-semibold px-4 py-2 flex items-center transition duration-150">
              Integrations
            </li>
            </Link>
            <Link to={'/pricing'}>
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
            <Link to={'/signin'}>Login</Link>
          </Button>
         <Button className="text-gray-100 font-semibold bg-blue-900/60">
         <Link to={'/signup'}>Sign Up</Link>
         </Button>
        </div>
    </div>
  );
}

export default Navabar;
