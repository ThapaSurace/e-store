import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { newRequest } from "../utils/newRequest";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/authRedux";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm()
  
  const onSubmit = async (data) => {
    dispatch(loginStart())
    try {
      const res = await 
      newRequest.post("/auth/login",data)
      dispatch(loginSuccess(res.data))
      toast.success("User login successfully!");
      navigate('/')
    } catch (error) {
      if(error.response){
        dispatch(loginFailure())
        toast.error(error.response.data)
      }
    }
  }
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div
        className="border rounded-xl shadow-sm p-10 max-w-xl w-full mx-auto"
      >
        <h1 className="text-4xl text-center font-bold text-teal-700 mb-6">
          Welcome Back
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div className="space-y-1">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" {...register("username", {
              required: "Please enter your username."
            })}  />
           {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
          </div>
          <div className="space-y-1">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" {...register("password", {
              required: "Please enter your passsword."
            })}   />
           {errors.username && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>
          <div className="mt-6">
            <button className="w-full bg-teal-500 hover:bg-teal-600">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
