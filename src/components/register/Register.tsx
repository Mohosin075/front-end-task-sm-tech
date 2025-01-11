import SocialLogin from "../socialLogin/SocialLogin";

interface ModalProps {
  toggleView: () => void;
}

function Register({ toggleView } : ModalProps) {
  return (
    <div className="space-y-6">
      <h3 className="font-bold text-2xl text-center">Register</h3>

      {/* Form */}
      <form className="space-y-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            className="input-style"
          />
        </div>

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
            placeholder="Create a password"
            className="input-style"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="my-btn w-full bg-primary text-white">
          Register
        </button>
      </form>
      <div className="divider">Or Sign Up with</div>

      <SocialLogin />

      {/* Toggle View */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            className="text-primary hover:underline focus:outline-none"
            onClick={toggleView}
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
