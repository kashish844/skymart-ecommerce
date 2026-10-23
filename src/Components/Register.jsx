import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { MyStore } from "../Context/MyContext";

const Register = () => {

    let{formData,setFormData}  = useContext(MyStore);
    let navigate = useNavigate();
    
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = (data) => {
    console.log(data);
    setFormData((prev)=>{
        let arr = [...prev,data];
         localStorage.setItem("users", JSON.stringify(arr));
         return arr;
    })

     localStorage.setItem("loggedInUser", JSON.stringify(data));
    reset();
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white flex flex-col items-center justify-center px-4">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-11 h-11 rounded-xl bg-[#c6ff00] flex items-center justify-center">
          <span className="text-black text-2xl font-bold">⚡</span>
        </div>

        <h1 className="text-2xl font-bold">
          Sky<span className="text-[#c6ff00]">Mart</span>
        </h1>
      </div>

      {/* Register Card */}
      <div className="w-full max-w-[560px] border border-[#303030] rounded-[30px] bg-[#101010] px-10 py-11 shadow-2xl">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-[30px] font-semibold tracking-tight">
            Create account
          </h1>

          <p className="text-[#777] text-[17px] mt-2">
            Join SkyMart and start shopping
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">

          {/* Name */}
          <div className="mb-5">
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#777]">
                ♙
              </span>

              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                placeholder="Full name"
                className="w-full h-[58px] rounded-[18px] border border-[#444] bg-[#1d1d1d] pl-12 pr-5 text-white outline-none placeholder:text-[#777] focus:border-[#c6ff00] transition"
              />
            </div>

            {errors.name && (
              <p className="text-red-500 text-sm mt-2 ml-2">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-5">
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#777]">
                ✉
              </span>

              <input
                type="text"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                placeholder="Email address"
                className="w-full h-[58px] rounded-[18px] border border-[#444] bg-[#1d1d1d] pl-12 pr-5 text-white outline-none placeholder:text-[#777] focus:border-[#c6ff00] transition"
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-2 ml-2">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-5">
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#777]">
                🔒
              </span>

              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                placeholder="Password (min 6 chars)"
                className="w-full h-[58px] rounded-[18px] border border-[#444] bg-[#1d1d1d] pl-12 pr-5 text-white outline-none placeholder:text-[#777] focus:border-[#c6ff00] transition"
              />
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-2 ml-2">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#777]">
                🔒
              </span>

              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                })}
                type="password"
                placeholder="Confirm password"
                className="w-full h-[58px] rounded-[18px] border border-[#444] bg-[#1d1d1d] pl-12 pr-5 text-white outline-none placeholder:text-[#777] focus:border-[#c6ff00] transition"
              />
            </div>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-2 ml-2">
                {errors.confirmPassword.message}
              </p>
            )}

            {/* Password Match Check */}
            {confirmPassword &&
              password &&
              password !== confirmPassword && (
                <p className="text-red-500 text-sm mt-2 ml-2">
                  Passwords do not match
                </p>
              )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full h-[66px] rounded-[18px] bg-[#c6ff00] text-black text-[19px] font-semibold hover:bg-[#b9f000] transition flex items-center justify-center gap-3"
          >
            Create Account
            <span className="text-2xl">→</span>
          </button>

          {/* Sign In */}
          <p className="text-center text-[#777] mt-8">
            Already have an account?{" "}
            <NavLink className="text-[#c6ff00] font-semibold cursor-pointer hover:underline" to={'/login'}>Sign in</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;