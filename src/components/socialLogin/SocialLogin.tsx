import { FaCartArrowDown } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function SocialLogin() {
  return (
    <div className="text-xl flex items-center gap-6">
      <button className="my-btn w-full">
      <FcGoogle />
        <span className="ml-1">Google</span>
      </button>
      <button className="my-btn w-full  ">
      <FaFacebook />
        <span className="ml-1">Facebook</span>
      </button>
    </div>
  );
}

export default SocialLogin;
