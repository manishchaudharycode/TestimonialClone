import Navabar from "../components/navabar";
import { SigUpFrom } from "../components/signUp";


function SignUp() {
  return (
    <div className="bg-neutral-900 w-screen h-screen">
      <div>
        <Navabar/>
      </div>
      <div className=" pt-10">
      <h1 className="text-white font-bold text-4xl justify-center flex">Sign up for free 🤗</h1>
      <p className="text-gray-400 justify-center flex text-xl mt-3">You will get 2 video and 10 text testimonial credits for FREE!</p>
     </div>
      <div className="flex items-center justify-center pt-10">
        <SigUpFrom/>
      </div>
    </div>
  );
}

export default SignUp;
