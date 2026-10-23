import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { MyStore } from "../Context/MyContext";
// import { useNavigate } from "react-router";

const FrontPage = ({setToggle}) => {

    let navigate = useNavigate();
    let{formData,setFormData} = useContext(MyStore);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = (data) => {
    let user = formData.find((val)=>{
      return val.email === data.email && val.password === data.password;
    })
    if(user){
      localStorage.setItem("loggedInUser",JSON.stringify(user));
      navigate('/home')
    }
    else{
      alert("User not found!");
    }

    setFormData((prev) => [...prev, data]);
    console.log(data);
    reset();
  };


  return (

    <div className="w-full min-h-screen flex bg-[#0d0d0d] text-white">

      {/* =====================================================
                          LEFT SIDE
      ====================================================== */}

      <div
        className="relative w-1/2 min-h-screen overflow-hidden"
        style={{
          backgroundColor: "#101010",
          backgroundImage: `
            radial-gradient(
              ellipse 500px 380px at 20% 55%,
              rgba(200, 255, 0, 0.09) 0%,
              rgba(200, 255, 0, 0.055) 30%,
              rgba(200, 255, 0, 0.02) 55%,
              transparent 78%
            )
          `,
        }}
      >

        {/* ================= LOGO ================= */}

        <div className="relative z-10 flex items-center gap-[13px] px-[51px] pt-[51px]">

          <div className="w-[43px] h-[43px] rounded-full bg-[#c8ff00] flex items-center justify-center">

            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.5 2L5 13H11L10.5 22L19 10H13L13.5 2Z"
                fill="#101010"
              />
            </svg>

          </div>

          <h1 className="text-[25px] font-bold tracking-tight">
            Sky<span className="text-[#c8ff00]">Mart</span>
          </h1>

        </div>


        {/* ================= MAIN CONTENT ================= */}

        <div className="relative z-10 px-[51px] mt-[180px]">

          {/* Welcome */}

          <p className="text-[#c8ff00] text-[14px] font-semibold tracking-[1.5px]">
            WELCOME BACK
          </p>


          {/* Heading */}

          <h2 className="mt-[26px] text-[52px] leading-[1.08] font-bold tracking-[-1.5px]">

            Shop the future.

            <br />

            <span className="text-[#c8ff00]">
              Today.
            </span>

          </h2>


          {/* Description */}

          <p className="mt-[31px] text-[#858585] text-[16px] leading-[28px]">

            Thousands of products, lightning-fast delivery, and

            <br />

            prices that make your wallet happy.

          </p>


          {/* ================= STATS ================= */}

          <div className="flex gap-[16px] mt-[51px]">


            {/* Products */}

            <div className="w-[230px] h-[89px] rounded-[17px] border border-[#bdbdbd] flex flex-col items-center justify-center">

              <h3 className="text-[#c8ff00] text-[19px] font-bold">
                20K+
              </h3>

              <p className="mt-[4px] text-[#858585] text-[13px]">
                Products
              </p>

            </div>


            {/* Users */}

            <div className="w-[230px] h-[89px] rounded-[17px] border border-[#bdbdbd] flex flex-col items-center justify-center">

              <h3 className="text-[#c8ff00] text-[19px] font-bold">
                50K+
              </h3>

              <p className="mt-[4px] text-[#858585] text-[13px]">
                Users
              </p>

            </div>


            {/* Rating */}

            <div className="w-[230px] h-[89px] rounded-[17px] border border-[#bdbdbd] flex flex-col items-center justify-center">

              <h3 className="text-[#c8ff00] text-[19px] font-bold">
                4.9★
              </h3>

              <p className="mt-[4px] text-[#858585] text-[13px]">
                Rating
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
                          DIVIDER
      ====================================================== */}

      <div className="w-[1px] bg-[#303030] min-h-screen"></div>


      {/* =====================================================
                          RIGHT SIDE
      ====================================================== */}

      <div className="w-1/2 min-h-screen bg-[#0d0d0d] flex items-center justify-center">

        {/* ================= LOGIN CARD ================= */}

        <div className="w-[485px] min-h-[403px] bg-[#101010] border border-[#292929] rounded-[24px] px-[35px] py-[37px] shadow-[0_25px_60px_rgba(0,0,0,0.4)]">


          {/* Heading */}

          <div>

            <h1 className="text-[27px] font-bold tracking-tight">
              Sign in
            </h1>

            <p className="text-[#747474] text-[14px] mt-2">
              Enter your credentials to continue
            </p>

          </div>


          {/* ================= FORM ================= */}

          <form
            onSubmit={handleSubmit(handleClick)}
            className="mt-[37px]"
          >


            {/* ================= EMAIL ================= */}

            <div className="relative">

              {/* Email Icon */}

              <div className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[#666]">

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >

                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />

                  <path d="M3 7L12 13L21 7" />

                </svg>

              </div>


              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="text"
                placeholder="Email address"
                className="
                  w-full
                  h-[50px]
                  bg-[#1d1d1d]
                  border
                  border-[#353535]
                  rounded-[17px]
                  pl-[44px]
                  pr-4
                  text-white
                  text-[14px]
                  outline-none
                  placeholder:text-[#707070]
                  focus:border-[#c8ff00]
                  transition
                "
              />

            </div>


            {/* Email Error */}

            {errors.email && (

              <p className="text-red-500 text-xs mt-1 ml-2">
                {errors.email.message}
              </p>

            )}


            {/* ================= PASSWORD ================= */}

            <div className="relative mt-[17px]">

              {/* Lock Icon */}

              <div className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[#666]">

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >

                  <rect
                    x="4"
                    y="10"
                    width="16"
                    height="11"
                    rx="2"
                  />

                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />

                </svg>

              </div>


              <input
                {...register("password", {
                  required: "Password is required",

                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },

                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="
                  w-full
                  h-[50px]
                  bg-[#1d1d1d]
                  border
                  border-[#353535]
                  rounded-[17px]
                  pl-[44px]
                  pr-[45px]
                  text-white
                  text-[14px]
                  outline-none
                  placeholder:text-[#707070]
                  focus:border-[#c8ff00]
                  transition
                "
              />


              {/* Eye Button */}

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[15px] top-1/2 -translate-y-1/2 text-[#666] hover:text-white transition"
              >

                {showPassword ? (

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >

                    <path d="M3 3L21 21" />

                    <path d="M10.6 10.6a2 2 0 1 0 2.8 2.8" />

                    <path d="M9.9 4.2A10.7 10.7 0 0 1 12 4c5.2 0 9.2 4 10 8" />

                    <path d="M6.6 6.6C4.7 7.8 3.4 9.6 2 12c1.1 3.4 4.9 8 10 8" />

                  </svg>

                ) : (

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >

                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />

                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                    />

                  </svg>

                )}

              </button>

            </div>


            {/* Password Error */}

            {errors.password && (

              <p className="text-red-500 text-xs mt-1 ml-2">
                {errors.password.message}
              </p>

            )}


            {/* ================= SIGN IN ================= */}

            <button
              type="submit"
              className="
                w-full
                h-[56px]
                mt-[18px]
                rounded-[17px]
                bg-[#c8ff00]
                text-black
                font-semibold
                text-[16px]
                flex
                items-center
                justify-center
                gap-3
                hover:bg-[#baff00]
                transition
                cursor-pointer
              "
            >

              <span>
                Sign in
              </span>


              {/* Arrow */}

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >

                <path d="M5 12H19" />

                <path d="M13 6L19 12L13 18" />

              </svg>

            </button>


            {/* ================= CREATE ACCOUNT ================= */}

            <p className="text-center text-[#707070] text-[14px] mt-[28px]">

              Don't have an account?{" "}

              <NavLink className="text-[#c8ff00] font-semibold hover:underline cursor-pointer" to={'/register'}>Create One</NavLink>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default FrontPage;