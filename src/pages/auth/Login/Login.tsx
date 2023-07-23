import { useState, useEffect } from "react";
import { FaUser, FaQuestionCircle, FaLock } from "react-icons/fa";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import loginImg from "../../../assets/auth/usersignUp.jpeg";
import Swal from "sweetalert2";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { ILogin } from "../../../types/globalTypes";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { loginUser } from "../../../redux/features/user/userSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<ILogin>();
  const location = useLocation();

  const passwordVisible = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, isLoading } = useAppSelector(
    (state: { user: any }) => state.user
  );

  const onSubmit: SubmitHandler<ILogin> = async (eventData) => {
    const { email, password } = eventData;
    console.log(email, password);
    try {
      dispatch(
        loginUser({
          email: email,
          password: password,
        })
      );

      Swal.fire({
        position: "top-end",
        timerProgressBar: true,
        title: "Successfully Login Done !",
        iconColor: "#ED1C24",
        toast: true,
        icon: "success",
        showClass: {
          popup: "animate__animated animate__fadeInRight",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutRight",
        },
        showConfirmButton: false,
        timer: 3500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        confirmButtonColor: "#0077b6",
      });
    }
  };

  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    if (user?.email) {
      navigate(from);
    }
  }, [from, isLoading, navigate, user?.email]);

  return (
    <section>
      <div className="  ">
        <div className="relative -z-10 lg:mt-[-35px] h-8 bg-white"></div>
        <div className="bg-white w-full md:py-20  md:px-16">
          <div className="md:grid grid-cols-12 gap-4">
            <div className="items-center justify-center lg:flex xxs:hidden col-span-5">
              <img className="" src={loginImg} alt="userLogin" />
            </div>
            <div className="col-span-7 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8">
              <div className="my-3 xs:mx-[40px] xxs:mx-[10px]">
                <div className="py-2 md:pt-5 md:py-3 border-b-2 border-[#ddd]">
                  <h5 className="text-[#0D0D0D] text-[18px] text-center">
                    Book Hub
                  </h5>
                </div>
                <div className="pt-5 w-4/5 mx-auto">
                  <h2 className=" text-[#5E5E5E] text-[14px] text-center">
                    Welcome to the Book Hub The Book Hub is the most popular
                    library website in the world. We are the best place to find
                    the book you want to read.
                  </h2>
                  <h2 className="py-5 text-[#5E5E5E] text-xl font-bold text-center">
                    Sign In
                  </h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative mb-6">
                    <span className="text-[#ddd] text-[20px] absolute  top-[15px] inset-y-0 left-0 pl-3 flex">
                      <FaUser />
                    </span>
                    <div className="w-full">
                      <input
                        placeholder="UserEmail"
                        type="email"
                        className=" border-[1px] border-[#ddd] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                        defaultValue=""
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is required",
                          },
                        })}
                      />
                    </div>
                    <span className="text-[#6B7280] text-[20px] absolute top-[15px] inset-y-0 right-0 pr-3 flex">
                      <FaQuestionCircle />
                    </span>
                  </div>
                  <div className="relative mb-6">
                    <span className="text-[#ddd] text-[20px] absolute top-[15px] inset-y-0 left-0 pl-3 flex">
                      <FaLock />
                    </span>
                    <input
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      className=" border-[1px] border-[#ddd] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3 "
                      defaultValue=""
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required",
                        },
                      })}
                    />
                    <span
                      className="text-[#6B7280] text-[20px] absolute top-[15px] inset-y-0 right-0 pr-3 flex"
                      onClick={passwordVisible}
                    >
                      {showPassword ? (
                        <AiOutlineEye />
                      ) : (
                        <AiOutlineEyeInvisible />
                      )}
                    </span>
                  </div>
                  <div className="flex md:flex-row xxs:flex-col xxs:justify-center items-center mb-4 md:justify-between ">
                    <div className="flex items-center ">
                      <div className="mr-2">
                        <input id="remember" type="checkbox" />
                      </div>{" "}
                      <label htmlFor="remember">Remember me</label>
                    </div>
                    <span className="text-[15px] text-[#676767] float-right">
                      <Link to="/">Forgot password</Link>
                    </span>
                  </div>
                  <div className="flex items-center mb-4 md:justify-between md:flex-row xxs:flex-col xxs:justify-center">
                    <div className="relative py-3 xs:flex-row xxs:flex-col xs:block xxs:flex xxs:text-center xs:text-left">
                      <span className="text-[15px] text-[#676767]">
                        <Link to="/signup">
                          Don't have an account?{" "}
                          <span className="text-[#0D0D0D]">Sign Up</span>
                        </Link>
                      </span>
                    </div>
                    <button className="common_btn mb-5">Sign In</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
