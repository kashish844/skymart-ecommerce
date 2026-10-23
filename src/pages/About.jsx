import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { MyStore } from "../Context/MyContext";
import CartItem from "./CartItem";

const About = () => {

  const navigate = useNavigate();
  let{handleProduct,setToggle,cartItems,toggle} = useContext(MyStore);

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      <div className={`min-h-screen bg-[#0b0b0b] text-white transition-all duration-300 ${
                    toggle ? "blur-sm brightness-50" : ""
                }`}>

      {/* ================= NAVBAR ================= */}

      <nav className="mx-auto flex h-[75px] max-w-[1320px] items-center justify-between px-4">

        {/* Logo */}

        <NavLink to="/home" className="flex items-center gap-2">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#b8ff00] text-xl text-black">
            ⚡
          </div>

          <h1 className="text-xl font-bold">
            Sky<span className="text-[#b8ff00]">Mart</span>
          </h1>

        </NavLink>


        {/* Links */}

        <div className="flex items-center gap-8">

          <NavLink
            to="/home"
            className="text-zinc-500 hover:text-white"
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className="text-zinc-500 hover:text-white"
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className="text-[#b8ff00]"
          >
            About
          </NavLink>

        </div>


        {/* Right side */}

        <div className="flex items-center gap-2">

          <div className="flex items-center gap-2 rounded-xl border border-zinc-800 px-3 py-2">

            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#b8ff00] text-sm font-bold text-black">
              K
            </div>

            <span className="text-sm text-zinc-300">
              Kashish
            </span>

          </div>


          <NavLink
            className="flex h-[42px] w-[45px] items-center justify-center rounded-xl border border-zinc-800 text-xl hover:border-zinc-500"
            onClick={()=>setToggle((prev)=>!prev)}
          >
            🛒
          </NavLink>


          <button
            onClick={() => navigate("/login")}
            className="flex h-[42px] w-[45px] items-center justify-center rounded-xl border border-zinc-800 text-xl text-zinc-400 hover:text-white"
          >
            ↪
          </button>

        </div>

      </nav>


      {/* ================= MAIN ================= */}

      <main className="mx-auto max-w-[1040px] px-6 py-10">


        {/* ================= ABOUT HERO ================= */}

        <section className="flex flex-col items-center text-center">

          <div className="flex h-[68px] w-[68px] items-center justify-center rounded-[22px] bg-[#b8ff00] text-[38px] text-black">
            ⚡
          </div>


          <h1 className="mt-8 text-[50px] font-bold">
            About{" "}
            <span className="text-[#b8ff00]">
              SkyMart
            </span>
          </h1>


          <p className="mt-5 max-w-[700px] text-[18px] leading-8 text-zinc-500">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>

        </section>


        {/* ================= STATS ================= */}

        <section className="mt-16 grid grid-cols-4 gap-4">

          <div className="flex h-[132px] flex-col items-center justify-center rounded-2xl border border-zinc-500">

            <div className="text-2xl text-[#b8ff00]">
              ◈
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              20K+
            </h2>

            <p className="text-sm text-zinc-600">
              Products
            </p>

          </div>


          <div className="flex h-[132px] flex-col items-center justify-center rounded-2xl border border-zinc-500">

            <div className="text-2xl text-[#b8ff00]">
              ♧
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              50K+
            </h2>

            <p className="text-sm text-zinc-600">
              Happy Customers
            </p>

          </div>


          <div className="flex h-[132px] flex-col items-center justify-center rounded-2xl border border-zinc-500">

            <div className="text-2xl text-[#b8ff00]">
              ☆
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              4.9
            </h2>

            <p className="text-sm text-zinc-600">
              Avg. Rating
            </p>

          </div>


          <div className="flex h-[132px] flex-col items-center justify-center rounded-2xl border border-zinc-500">

            <div className="text-2xl text-[#b8ff00]">
              ♧
            </div>

            <h2 className="mt-3 text-2xl font-bold">
              99%
            </h2>

            <p className="text-sm text-zinc-600">
              On-time Delivery
            </p>

          </div>

        </section>


        {/* ================= OUR STORY ================= */}

        <section className="mt-16 rounded-[25px] border border-zinc-500 bg-[#101010] px-11 py-10">

          <h2 className="text-3xl font-bold">
            Our Story
          </h2>


          <div className="mt-6 space-y-5 text-[15px] leading-7 text-zinc-500">

            <p>
              SkyMart started in 2022 as a small side project — two engineers
              tired of bloated, slow e-commerce experiences. We asked
              ourselves: what if shopping online was actually{" "}
              <span className="italic text-zinc-400">
                enjoyable?
              </span>
            </p>

            <p>
              Three years later, SkyMart serves over 50,000 customers across
              the country. We stock electronics, fashion, jewelry, and
              everyday essentials — all at prices that don't require a second
              mortgage.
            </p>

            <p>
              We're still the same team at heart: obsessed with speed,
              transparency, and making you feel good about every purchase you
              make here.
            </p>

          </div>

        </section>


        {/* ================= WHAT WE STAND FOR ================= */}

        <section className="mt-16">

          <h2 className="mb-8 text-center text-3xl font-bold">
            What We Stand For
          </h2>


          <div className="grid grid-cols-2 gap-4">

            <div className="flex min-h-[140px] gap-5 rounded-2xl border border-zinc-500 bg-[#101010] p-7">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#202b00] text-2xl text-[#b8ff00]">
                ♢
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Trust
                </h3>

                <p className="mt-2 leading-6 text-zinc-500">
                  Every product is verified for quality and authenticity
                  before listing.
                </p>
              </div>

            </div>


            <div className="flex min-h-[140px] gap-5 rounded-2xl border border-zinc-500 bg-[#101010] p-7">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#202b00] text-2xl text-[#b8ff00]">
                ♧
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Speed
                </h3>

                <p className="mt-2 leading-6 text-zinc-500">
                  We obsess over delivery times so your orders arrive when
                  promised.
                </p>
              </div>

            </div>


            <div className="flex min-h-[140px] gap-5 rounded-2xl border border-zinc-500 bg-[#101010] p-7">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#202b00] text-2xl text-[#b8ff00]">
                ♡
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Community
                </h3>

                <p className="mt-2 leading-6 text-zinc-500">
                  Built around real customer feedback, not just business
                  metrics.
                </p>
              </div>

            </div>


            <div className="flex min-h-[140px] gap-5 rounded-2xl border border-zinc-500 bg-[#101010] p-7">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#202b00] text-2xl text-[#b8ff00]">
                ☆
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Quality
                </h3>

                <p className="mt-2 leading-6 text-zinc-500">
                  We curate the best — no filler, no junk, just great
                  products.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= TEAM ================= */}

        <section className="mt-16">

          <h2 className="mb-8 text-center text-3xl font-bold">
            Meet the Team
          </h2>


          <div className="grid grid-cols-4 gap-4">

            <div className="flex h-[158px] flex-col items-center justify-center rounded-2xl border border-zinc-500">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b8ff00] text-xl font-bold text-black">
                A
              </div>

              <h3 className="mt-4 font-bold">
                Aryan Shah
              </h3>

              <p className="text-sm text-zinc-600">
                Founder & CEO
              </p>

            </div>


            <div className="flex h-[158px] flex-col items-center justify-center rounded-2xl border border-zinc-500">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 text-xl font-bold">
                P
              </div>

              <h3 className="mt-4 font-bold">
                Priya Mehta
              </h3>

              <p className="text-sm text-zinc-600">
                Head of Product
              </p>

            </div>


            <div className="flex h-[158px] flex-col items-center justify-center rounded-2xl border border-zinc-500">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500 text-xl font-bold">
                R
              </div>

              <h3 className="mt-4 font-bold">
                Rohan Verma
              </h3>

              <p className="text-sm text-zinc-600">
                Lead Engineer
              </p>

            </div>


            <div className="flex h-[158px] flex-col items-center justify-center rounded-2xl border border-zinc-500">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500 text-xl font-bold">
                S
              </div>

              <h3 className="mt-4 font-bold">
                Sneha Kapoor
              </h3>

              <p className="text-sm text-zinc-600">
                Design Director
              </p>

            </div>

          </div>

        </section>


        {/* ================= READY TO SHOP ================= */}

        <section className="mt-14 rounded-[25px] border border-[#3b4d00] px-8 py-12 text-center">

          <h2 className="text-3xl font-bold">
            Ready to shop?
          </h2>

          <p className="mt-3 text-zinc-500">
            Explore thousands of products at unbeatable prices.
          </p>

          <button
            onClick={() => {navigate("/products");
                handleProduct("all");
            }}
            className="mt-7 rounded-2xl bg-[#b8ff00] px-9 py-4 font-semibold cursor-pointer text-black hover:bg-[#c9ff40]"
          >
            Browse Products →
          </button>

        </section>


        <div className="h-16"></div>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-zinc-700 py-12 text-center">

        <h2 className="text-2xl text-[#b8ff00]">
          SkyMart
        </h2>

        <p className="mt-3 text-sm text-zinc-600">
          © 2026 SkyMart • Built with React 
        </p>

      </footer>

      </div>

       {
  toggle && (
    <>
      {/* Outer screen */}
      <div
        onClick={() => setToggle(false)}
        className="fixed inset-0 z-40"
      ></div>

      {/* Cart */}
      <div className="fixed right-0 top-0 z-50">
        <CartItem cartItems={cartItems} />
      </div>
    </>
  )
}
    </div>
  );
};

export default About;