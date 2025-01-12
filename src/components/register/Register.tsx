import { useForm } from "react-hook-form";
import SocialLogin from "../socialLogin/SocialLogin";
import { useRegisterUserMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";

interface ModalProps {
  toggleView: () => void;
  setIsSignIn: (value: boolean) => void;
  isSignIn: boolean;
}

function Register({ toggleView, setIsSignIn, isSignIn }: ModalProps) {
  const [registerUser] = useRegisterUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);

    const res = await registerUser({ userData: data });

    if (res?.data?.success === true) {
      toast.success(res?.data?.message || "Created!");
      setIsSignIn(!isSignIn);
    }

    if (res?.error) {
      if ("data" in res.error) {
        const errorData = res.error.data as { message?: string };
        toast.success(errorData?.message || "Something went wrong!");
      } else {
        toast.success("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="font-bold text-2xl text-center">Register</h3>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("fullName", { required: "Full Name is required" })}
          />
          {errors.fullName && (
            <p className="text-sm text-red-500">
              {errors?.fullName?.message as string}
            </p>
          )}
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
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-500">
              {errors.email.message as string}
            </p>
          )}
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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-sm text-red-500">
              {errors.password.message as string}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value={"Register"}
          className="my-btn w-full bg-primary text-white cursor-pointer"
        />
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
