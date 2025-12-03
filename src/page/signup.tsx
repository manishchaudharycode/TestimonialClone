import Navabar from "../components/navabar";
import { SigUpFrom } from "../components/signup";

function SignIn() {
  return (
    <div className="bg-neutral-900 w-screen h-screen">
      <div>
        <Navabar/>
      </div>
      <div>
        <SigUpFrom />
      </div>
    </div>
  );
}

export default SignIn;
