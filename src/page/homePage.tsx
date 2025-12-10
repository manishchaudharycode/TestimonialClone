import Navabar from "../components/navabar"
import Homeboard from "./home"

function Home() {
  return (
    <div className="bg-neutral-900 w-screen h-screen">
      <div className="">
        <Navabar/>
      </div>
      <div>
        <Homeboard/>
      </div>

    </div>
  )
}

export default Home