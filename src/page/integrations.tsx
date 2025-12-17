import Navabar from "../components/navabar"
import { Button } from "../components/ui/button"
import { appName } from "../lib/constant"


function Integration() {
  return (
    <div className="bg-neutral-900  h-screen">
        <div>
            <Navabar/>
        </div>
        <div className="bg-neutral-900 max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 mt-8">
            <div className="max-w-4xl mx-auto text-center pb-16">
                <h1 className="text-white text-6xl font-medium">Import customer testimonials and embed them on any platform</h1>
                <p className="text-xl mt-4 text-gray-500">We built the ultimate tool for showcasing your satisfied customers. With 3-lines of HTML code, you can embed all your testimonials to any platform!</p>
            </div>
            <div className="flex flex-col md:flex-row md:block ">
                <div className="w-full md:w-64 mb-3 float-left sticky to-5 sidebar ">
                    <div className="relative inline-block text-left z-30 md:hidden w-full bg-neutral-900">
                        <div>
                            <Button className="admin-options-btn inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text0sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100  "></Button>
                        </div>
                    </div>
                    {appName.map((name, indx) => (
                        <ul key={indx} className="list-none space-y-2  hidden md:block">
                         <li  className="border-l-4 ml-3 font-bold py-2 cursor-pointer  text-gray-700  rounded-r-md border-transparent">
                            {name.text}
                         </li>
                    </ul>
                    ) )}
                </div>
                <div className="widget-list-container w-full  md:px-8 rightsidebarblock  ">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Integration