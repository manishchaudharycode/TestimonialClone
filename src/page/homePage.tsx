import Navabar from "../components/navabar"
import HomeDashboard from "./home"

function Home() {
  return (
    <div className="bg-neutral-900 w-screen h-screen">
      <div className="">
        <Navabar/>
      </div>
      <div>
        <HomeDashboard/>
      </div>

    </div>
  )
}

export default Home