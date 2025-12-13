import Navabar from "../components/navabar"
import { Button } from "../components/ui/button"

function WallOfLove() {
  return (
    <div className="bg-neutral-900">
        <div>
            <Navabar/>
        </div>
        <div className="">
            <div className="mx-auto text-center pb-6 pt-16">
                <h1 className=" text-gray-200 text-6xl font-bold">Our Wall Of Love</h1>
                <h4 className="text-gray-500 max-w-4xl ml-100 mt-2 px-4 sm:px-6 text-xl">We are loved by startups, marketing agencies, real estate agencies, freelancers, Fortune 500 companies and many more.<span className="bg-yellow-100">Our customers' testimonials are the best social proof we can get!</span></h4>
                <div>
                   <a href="/signup"> <Button className="bg-blue-500 mt-10  text-white font-medium">Create your own Wall of Love</Button></a>
                </div>
            </div>
            <div className="mt-15">
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
                  height: "3280px",
                } as React.CSSProperties
              }
            ></iframe>
            </div> 
        </div>
    </div>
  )
}

export default WallOfLove