import { useState } from "react";
import { FaUser, FaQuestionCircle, FaLock } from "react-icons/fa";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import loginImg from "../../../assets/auth/usersignUp.jpeg";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { IRegister } from "../../../types/globalTypes";
import google from "../../../assets/icons/google.svg";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<IRegister>();

  const passwordVisible = () => {
    setShowPassword(showPassword ? false : true);
  };

  const onSubmit: SubmitHandler<IRegister> = async (eventData) => {
    const { name, email, password, confirmPassword } = eventData;
    console.log(confirmPassword, name, email, password);

    try {
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

  return (
    <section>
      <div className=" ">
        <div className="bg-white md:px-16">
          <div className=" ">
            <div className="grid grid-cols-12 gap-4 ">
              <div className="lg:col-span-5 xxs:col-span-12 justify-center flex">
                <div className="mx-auto items-center justify-center lg:flex xxs:hidden">
                  <img
                    className="h-3/5 w-full"
                    src={loginImg}
                    alt="userSignup"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 xxs:col-span-12 py-10">
                <div className="xxs:px-[25px] xs:px-[30px] sm:px-[30px] md:px-[30px] lg:px-[28px] xl:px-[40px] py-10  bg-[#f7f7f7] shadow-md rounded-lg">
                  <h4 className="xs:text-2xl xxs:text-md sm:text-3xl md:text-3xl">
                    Account details
                  </h4>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative mb-6">
                      <span className="text-[#ddd] text-[20px] absolute  top-[15px] inset-y-0 left-0 pl-3 flex">
                        <FaUser />
                      </span>
                      <div className="w-full">
                        <input
                          placeholder="Name"
                          type="text"
                          className=" border-[1px] border-[#ddd] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                          defaultValue=""
                          {...register("name", {
                            required: {
                              value: true,
                              message: "Name is required",
                            },
                          })}
                        />
                      </div>
                      <span className="text-[#6B7280] text-[20px] absolute top-[15px] inset-y-0 right-0 pr-3 flex">
                        <FaQuestionCircle />
                      </span>
                    </div>
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
                    <div className="relative mb-6">
                      <span className="text-[#ddd] text-[20px] absolute top-[15px] inset-y-0 left-0 pl-3 flex">
                        <FaLock />
                      </span>
                      <input
                        placeholder="Confirm Password"
                        type={showPassword ? "text" : "password"}
                        className=" border-[1px] border-[#ddd] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3 "
                        defaultValue=""
                        {...register("confirmPassword", {
                          required: {
                            value: true,
                            message: "Confirm Password is required",
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
                          <Link to="/login">
                            Already have an account?
                            <span className="text-[#0D0D0D]">Sign In</span>
                          </Link>
                        </span>
                      </div>
                      <button className="common_btn mb-5">Sign Up</button>
                    </div>
                  </form>

                  <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-sm text-gray-400">
                      Login with social accounts
                    </p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                  </div>
                  <div className="flex items-center justify-center space-x-4 pt-5">
                    <button className="bg-white flex px-3 py-2 rounded-lg mt-2 text-lg shadow-lg">
                      <img src={google} alt="google" className="mr-1 w-7 h-7" />{" "}
                      <p className="ml-2 text-[#676767] font-[500]">
                        Sign in with Google
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 ">
            <div className="bg-[#f7f7f7] shadow-md p-6 text-center">
              <h3 className="text-xl text-black  mb-1">
                Don&apos; t have a Book Hub User Account yet?
              </h3>
              <h5 className="text-lg mb-1 text-[#7a7777]">
                Create an account now that you have access to the Book Hub
              </h5>
              <p className="text-[13px] text-[#676767]">
                1. Create an account on the Book Hub website. 2. Sign up with
                your email and password. 3. Once you have signed up, you will
                receive a confirmation email. 4. Click on the confirmation link
                in the email. 5. Once you have confirmed your account, you will
                be redirected to the login page.
              </p>
              <p className="text-[12px] mb-[-20px]  text-[#676767]">
                <Link to="/privacy-policy" className="text-red-10">
                  Privacy Policy
                </Link>
                . By creating an account, you agree to our{" "}
                <Link to="/term-&-condition" className="text-red-10">
                  Terms & Conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
