import { ModalProps } from "../register/Register";
import SocialLogin from "../socialLogin/SocialLogin";

function Login({ toggleView } : ModalProps) {
  return (
    <div className="space-y-6">
      <h3 className="font-bold text-2xl text-center">Login</h3>

      {/* Form */}
      <form className="space-y-4">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="input-style"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="input-style"
          />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <label className="label cursor-pointer">
              <span className="label-text">Remember me</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox input-xs ms-2"
              />
            </label>
          </div>
          <div>
            <p className="underline cursor-pointer">Forgot Password</p>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="my-btn w-full bg-primary text-white">
          Sign In
        </button>
      </form>

      <div className="divider">Or Sign In with</div>

      {/* Social Login */}
      <SocialLogin />

      {/* Toggle View */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          New to this site? Please {" "}
          <button
            className="text-primary hover:underline focus:outline-none"
            onClick={toggleView}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
