import { useForm, SubmitHandler } from "react-hook-form";
import SocialLogin from "../socialLogin/SocialLogin";
import {
  useGetProductQuery,
  useGetProfileQuery,
  useLoginUserMutation,
} from "@/redux/api/baseApi";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";

interface ModalProps {
  toggleView: () => void;
  setIsOpen: (value: boolean) => void;
}

interface LoginFormInputs {
  email: string;
  password: string;
  rememberMe: boolean;
}

function Login({ toggleView, setIsOpen }: ModalProps) {
  const { register, handleSubmit } = useForm<LoginFormInputs>();

  const [loginUser] = useLoginUserMutation();
  const { data: profile } = useGetProfileQuery("");

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const res = await loginUser({ userData: data });

      const token = res?.data?.data?.token;

      if (token) {
        toast.success(res?.data?.message || "Logged In");

        dispatch(setUser({ token, user: profile?.data?.email || null }));

        setIsOpen(false);
      }

      if (res?.error) {
        if ("data" in res.error) {
          const errorData = res.error.data as { message?: string };
          toast.success(errorData?.message || "Something went wrong!");
        } else {
          toast.success("Something went wrong!");
        }
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="font-bold text-2xl text-center">Login</h3>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("email")}
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
            {...register("password")}
          />
        </div>

        {/* Remember Me */}
        <div className="flex justify-between items-center">
          <div>
            <label className="label cursor-pointer">
              <span className="label-text">Remember me</span>
              <input
                type="checkbox"
                className="checkbox input-xs ms-2"
                {...register("rememberMe")}
              />
            </label>
          </div>
          <div>
            <p className="underline cursor-pointer">Forgot Password</p>
          </div>
        </div>

        {/* Submit Button */}
        <input
          value="Login"
          type="submit"
          className="my-btn w-full bg-primary text-white cursor-pointer"
        />
      </form>

      <div className="divider">Or Sign In with</div>

      {/* Social Login */}
      <SocialLogin />

      {/* Toggle View */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          New to this site? Please{" "}
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
