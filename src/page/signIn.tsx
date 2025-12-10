import Navabar from "../components/navabar";
import { LoginFrom } from "../components/signIn";

function SignIn() {
  return (
    <div className="bg-neutral-900 w-screen h-screen">
     <div>
            <Navabar/>
     </div>
     <div className="flex items-center justify-center pt-30">
      <h1 className="text-white font-bold text-4xl">Welcom back 👋</h1>
     </div>
     <div className="flex  items-center justify-center pt-20">
          <LoginFrom />
     </div>
    </div>
  );
}

export default SignIn;
