import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { newRequest } from "../utils/newRequest";

const Register = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    try {
      const res = await newRequest.post("/auth/register", data)
      toast.success(res.data);
      navigate('/login')
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data)
      }
    }
  }
  return (
    <div className="min-h-[90vh] flex justify-center items-center my-6">
      <div className="border rounded-xl shadow-sm p-4 max-w-xl w-full mx-auto">
        <h1 className="text-2xl font-semibold text-slate-900 mb-6">
          Create New Account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div className="space-y-1">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              {...register("firstname", {
                required: "Please enter your firstname",
                minLength: {
                  value: 3,
                  message: "Enter atleast 3 charcter."
                }
              })}
            />
            {errors.firstname && <span className="text-red-500">
              {errors.firstname.message}
            </span>}
          </div>
          <div className="space-y-1">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              {...register("lastname", {
                required: "Please enter your firstname",
                minLength: {
                  value: 3,
                  message: "Enter atleast 3 charcter."
                }
              })}
            />
            {errors.lastname && <span className="text-red-500">
              {errors.lastname.message}
            </span>}
          </div>
          <div className="space-y-1">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              {...register("username", {
                required: "Please enter your username.",
                minLength: {
                  value: 3,
                  message: "Username must be atleast 3 charcter."
                }
              })}
            />
            {errors.username && <span className="text-red-500">
              {errors.username.message}
            </span>}
          </div>
          <div className="space-y-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              {...register("email", {
                required: "Please enter your email.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter valid password."
                }
              })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="space-y-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              {...register("password", {
                required: "Please enter your password.",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                  message: "Password must be 6-15 characters long and include a digit, a lowercase letter, and an uppercase letter."
                }
              })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <div>
            <button disabled={isSubmitting} className="w-full bg-teal-500 hover:bg-teal-600 mt-4 disabled:bg-teal-300 disabled:cursor-not-allowed">
              {
                isSubmitting ? "processing..." : "register"
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
