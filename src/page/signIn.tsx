import Navabar from "../components/navabar";
import { LoginFrom } from "../components/signIn";

function SignIn() {
  return (
    <div className="bg-neutral-900 w-screen h-screen">
        <div>
            <Navabar/>
        </div>
      <div>
        <LoginFrom />
      </div>
    </div>
  );
}

export default SignIn;
