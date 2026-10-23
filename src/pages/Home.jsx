import React, { useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import { MyStore } from "../Context/MyContext";
import CartItem from "./CartItem";

const Home = () => {

  let navigate = useNavigate();

  let {handleProduct,toggle,setToggle,cartItems,topRated,newArrivals,setCartItems,isinHome} = useContext(MyStore);
  let data = JSON.parse((localStorage.getItem("loggedInUser")));
  
  
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      <div
        className={`min-h-screen bg-[#0b0b0b] text-white transition-all duration-300 ${
          toggle ? "blur-sm brightness-50" : ""
        }`}
      >

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
              className="font-semibold text-[#b8ff00]"
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className="text-zinc-500 hover:text-white"
              onClick={() => handleProduct("all")}
            >
              Shop
            </NavLink>

            <NavLink
              to="/about"
              className="text-zinc-500 hover:text-white"
            >
              About
            </NavLink>

          </div>


          {/* Right side */}

          <div className="flex items-center gap-2">

            {/* User */}

            <div className="flex items-center gap-2 rounded-xl border border-zinc-800 px-3 py-2">

              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#b8ff00] text-sm font-bold text-black">
                {data.name.charAt(0)}
              </div>

              <span className="text-sm text-zinc-300">
                {data.name}
              </span>

            </div>


            {/* Cart */}

            <NavLink
              className="flex h-[42px] w-[45px] items-center justify-center rounded-xl border border-zinc-800 text-xl hover:border-zinc-500"
              onClick={() => setToggle((prev) => !prev)}
            >
              🛒
            </NavLink>


            {/* Logout */}

            <button
              onClick={() => navigate("/login")}
              className="flex h-[42px] cursor-pointer w-[45px] items-center justify-center rounded-xl border border-zinc-800 text-xl text-zinc-400 hover:text-white"
            >
              ↪
            </button>

          </div>

        </nav>


        {/* ================= MAIN ================= */}

        <main className="mx-auto max-w-[1320px] px-4 py-9">


          {/* ================= HERO ================= */}

          <section className="relative overflow-hidden rounded-[25px] border border-zinc-600 bg-[#101010]">

            {/* Grid */}

            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(#252525 1px, transparent 1px), linear-gradient(90deg, #252525 1px, transparent 1px)",
                backgroundSize: "43px 43px",
              }}
            ></div>


            <div className="relative flex min-h-[390px] items-center justify-between px-14 py-12">

              {/* Hero left */}

              <div>

                <p className="mb-4 text-sm font-medium tracking-[2px] text-[#b8ff00]">
                  GOOD MORNING 👋
                </p>

                <h1 className="text-[52px] font-bold leading-[1] tracking-[-2px]">

                  Welcome back,

                  <br />

                  <span className="text-[#b8ff00]">
                  {data.name}
                  </span>

                </h1>

                <p className="mt-6 max-w-[560px] text-[17px] leading-7 text-zinc-400">
                  Discover today's picks — hand-curated products across
                  electronics, fashion, and more.
                </p>


                <div className="mt-7 flex gap-4">

                  <button
                    onClick={() => {
                      navigate("/products");
                      handleProduct("all");
                    }}
                    className="rounded-2xl cursor-pointer bg-[#b8ff00] px-7 py-4 font-semibold text-black hover:bg-[#c9ff40]"
                  >
                    Shop Now →
                  </button>

                  <button
                    onClick={() => {
                      navigate("/products");
                      handleProduct("all");
                    }}
                    className="rounded-2xl border cursor-pointer border-zinc-700 px-7 py-4 text-zinc-300 hover:border-[#b8ff00]"
                  >
                    View All Products
                  </button>

                </div>

              </div>


              {/* Hero right */}

              <div className="mr-3 flex flex-col gap-4">

                <div className="flex h-[102px] w-[165px] flex-col items-center justify-center rounded-2xl border border-[#526b00] bg-[#202900]">

                  <h2 className="text-3xl font-bold text-[#b8ff00]">
                    20+
                  </h2>

                  <p className="text-sm text-zinc-400">
                    Products Available
                  </p>

                </div>


                <div className="flex h-[94px] w-[165px] flex-col items-center justify-center rounded-2xl border border-zinc-500">

                  <h2 className="text-2xl font-bold">
                    Free
                  </h2>

                  <p className="text-sm text-zinc-500">
                    Delivery on ₹999+
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* ================= STATS ================= */}

          <section className="mt-10 grid grid-cols-4 gap-4">

            <div className="flex items-center gap-5 rounded-2xl border border-zinc-600 bg-[#101010] px-6 py-6">

              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#202b00] text-2xl text-[#b8ff00]">
                ◈
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  {
                    cartItems.reduce((acc,sum)=>acc+sum.quantity,0)
                  }
                </h2>

                <p className="text-zinc-400">
                  Cart Items
                </p>

                <p className="text-xs text-zinc-600">
                  In your bag
                </p>

              </div>

            </div>


            <div className="flex items-center gap-5 rounded-2xl border border-zinc-600 bg-[#101010] px-6 py-6">

              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#111d2d] text-2xl text-blue-400">
                ↗
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  $
                  {
                    cartItems
                      .reduce((acc, sum) => acc + sum.price*sum.quantity, 0)
                      .toFixed(2)
                  }
                </h2>

                <p className="text-zinc-400">
                  Cart Value
                </p>

                <p className="text-xs text-zinc-600">
                  Ready to checkout
                </p>

              </div>

            </div>


            <div className="flex items-center gap-5 rounded-2xl border border-zinc-600 bg-[#101010] px-6 py-6">

              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#2b220b] text-2xl text-yellow-400">
                ☆
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  5
                </h2>

                <p className="text-zinc-400">
                  Top Products
                </p>

                <p className="text-xs text-zinc-600">
                  Highly rated
                </p>

              </div>

            </div>


            <div className="flex items-center gap-5 rounded-2xl border border-zinc-600 bg-[#101010] px-6 py-6">

              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#21142d] text-2xl text-purple-400">
                ◇
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  6
                </h2>

                <p className="text-zinc-400">
                  Categories
                </p>

                <p className="text-xs text-zinc-600">
                  To explore
                </p>

              </div>

            </div>

          </section>


          {/* ================= CATEGORIES ================= */}

          <section className="mt-12">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-bold">
                Shop by Category
              </h2>

              <button
                onClick={() => {
                  navigate("/products");
                  handleProduct("all");
                }}
                className="text-sm text-[#b8ff00] cursor-pointer"
              >
                View All →
              </button>

            </div>


            <div className="grid grid-cols-4 gap-4">

              {/* Electronics */}

              <div
                className="flex h-[140px] cursor-pointer flex-col items-center justify-center rounded-2xl bg-white text-black transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                onClick={() => {
                  navigate("/products");
                  handleProduct("electronics");
                }}
              >

                <div className="text-3xl">
                  💻
                </div>

                <h3 className="mt-3 font-semibold">
                  Electronics
                </h3>

                <p className="text-sm text-zinc-400">
                  6 items
                </p>

              </div>


              {/* Clothing */}

              <div
                className="flex h-[140px] cursor-pointer flex-col items-center justify-center rounded-2xl bg-white text-black transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                onClick={() => {
                  handleProduct("men's clothing");
                  navigate("/products");
                }}
              >

                <div className="text-3xl">
                  📦
                </div>

                <h3 className="mt-3 font-semibold">
                  Men's Clothing
                </h3>

                <p className="text-sm text-zinc-400">
                  4 items
                </p>

              </div>


              {/* Women's Clothing */}

              <div
                className="flex h-[140px] cursor-pointer flex-col items-center justify-center rounded-2xl bg-white text-black transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                onClick={() => {
                  handleProduct("women's clothing");
                  navigate("/products");
                }}
              >

                <div className="text-3xl">
                  📦
                </div>

                <h3 className="mt-3 font-semibold">
                  Women's Clothing
                </h3>

                <p className="text-sm text-zinc-400">
                  6 items
                </p>

              </div>


              {/* Accessories */}

              <div
                className="flex h-[140px] cursor-pointer flex-col items-center justify-center rounded-2xl bg-white text-black transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                onClick={() => {
                  handleProduct("jewelery");
                  navigate("/products");
                }}
              >

                <div className="text-3xl">
                  📦
                </div>

                <h3 className="mt-3 font-semibold">
                  Jewellery
                </h3>

                <p className="text-sm text-zinc-400">
                  4 items
                </p>

              </div>

            </div>

          </section>


          {/* ================= PRODUCTS ================= */}

          <section className="mt-11 grid grid-cols-2 gap-6">


            {/* ================= TOP RATED ================= */}

            <div  className="min-h-[450px] cursor-pointer rounded-[25px] bg-white p-7 text-black">

              <div className="mb-6 flex items-center justify-between">

                <h2 className="text-2xl font-bold">
                  ⭐ Top Rated
                </h2>

                <button
                  onClick={() => {
                    navigate("/products");
                    handleProduct("all");
                  }}
                  className="cursor-pointer text-sm text-[#9bd600]"
                >
                  See all →
                </button>

              </div>


              <div className="flex flex-col gap-3">

                {topRated.map((product) => (

                  <div 
                    key={product.id}
                    className="flex h-[92px] items-center justify-between rounded-[20px] border border-gray-200 px-5"
                  >

                    {/* Product Image + Price */}

                    <div className="flex items-center gap-5" onClick={()=> 
            {
              navigate(`/details/${product.id}`);
              
            }}>

                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-[52px] w-[52px] object-contain"
                      />

                      <div>

                        <p className="max-w-[400px] truncate text-sm font-medium">
                          {product.title}
                        </p>

                        <p className="mt-1 font-semibold text-[#9bd600]">
                          ${product.price}
                        </p>

                      </div>

                    </div>


                    {/* Cart Icon */}

                    <button
    onClick={() => {
        if (!isinHome(product.id)) {
            setCartItems((prev) => [
                ...prev,
                { ...product, quantity: 1 }
            ]);
        }
        setToggle((prev) => !prev);
    }}
    className="
        flex h-10 w-10 items-center justify-center
        rounded-xl
        border border-[#b8ff00]/30
        bg-[#b8ff00]
        text-lg text-black
        shadow-[0_0_12px_rgba(184,255,0,0.15)]
        transition-all duration-200
        hover:scale-105
        hover:bg-[#c7ff33]
        hover:shadow-[0_0_18px_rgba(184,255,0,0.3)]
        active:scale-95
    "
>
    🛍
</button>

                  </div>

                ))}

              </div>

            </div>


            {/* ================= NEW ARRIVALS ================= */}

            <div className="min-h-[450px] cursor-pointer rounded-[25px] bg-white p-7 text-black">

              <div className="mb-6 flex items-center justify-between">

                <h2 className="text-2xl font-bold">
                  ⚡ New Arrivals
                </h2>

                <button
                  onClick={() => {
                    navigate("/products");
                    handleProduct("all");
                  }}
                  className="cursor-pointer text-sm text-[#9bd600]"
                >
                  See all →
                </button>

              </div>


              <div className="flex flex-col gap-3">

                {newArrivals.map((product) => (

                  <div
                    key={product.id}
                    className="flex h-[92px] items-center justify-between rounded-[20px] border border-gray-200 px-5"
                  >

                    {/* Product Image + Price */}

                    <div className="flex items-center gap-5" onClick={()=>navigate(`/details/${product.id}`)}>

                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-[52px] w-[52px] object-contain"
                      />

                      <div>

                        <p className="max-w-[400px] truncate text-sm font-medium">
                          {product.title}
                        </p>

                        <p className="mt-1 font-semibold text-[#9bd600]">
                          ${product.price}
                        </p>

                      </div>

                    </div>


                    {/* Cart Icon */}

                    <button
    onClick={() => {
        if (!isinHome(product.id)) {
            setCartItems((prev) => [
                ...prev,
                { ...product, quantity: 1 }
            ]);
        }
        setToggle((prev) => !prev);
    }}
    className="
        flex h-10 w-10 items-center justify-center
        rounded-xl
        border border-[#b8ff00]/30
        bg-[#b8ff00]
        text-lg text-black
        shadow-[0_0_12px_rgba(184,255,0,0.15)]
        transition-all duration-200
        hover:scale-105
        hover:bg-[#c7ff33]
        hover:shadow-[0_0_18px_rgba(184,255,0,0.3)]
        active:scale-95
    "
>
    🛍
</button>

                  </div>

                ))}

              </div>

            </div>

          </section>


          {/* ================= FEATURES ================= */}

          <section className="mt-11 grid grid-cols-3 gap-4 pb-16">

            <div className="flex items-center gap-5 rounded-2xl border border-zinc-600 px-7 py-6">

              <span className="text-3xl text-[#b8ff00]">
                ⚡
              </span>

              <div>

                <h3 className="font-semibold">
                  Fast Delivery
                </h3>

                <p className="text-sm text-zinc-500">
                  Same-day on select items
                </p>

              </div>

            </div>


            <div className="flex items-center gap-5 rounded-2xl border border-zinc-600 px-7 py-6">

              <span className="text-3xl text-blue-400">
                ♢
              </span>

              <div>

                <h3 className="font-semibold">
                  Secure Payments
                </h3>

                <p className="text-sm text-zinc-500">
                  100% encrypted checkout
                </p>

              </div>

            </div>


            <div className="flex items-center gap-5 rounded-2xl border border-zinc-600 px-7 py-6">

              <span className="text-3xl text-[#b8ff00]">
                ◇
              </span>

              <div>

                <h3 className="font-semibold">
                  Best Prices
                </h3>

                <p className="text-sm text-zinc-500">
                  Price-match guarantee
                </p>

              </div>

            </div>

          </section>

        </main>


        {/* ================= FOOTER ================= */}

        <footer className="border-t border-zinc-700 py-12 text-center">

          <h2 className="text-2xl text-[#b8ff00]">
            SkyMart
          </h2>

          <p className="mt-3 text-sm text-zinc-600">
            © 2026 SkyMart • Built with React ❤️
          </p>

        </footer>

      </div>


      {/* ================= CART DRAWER ================= */}

      {
  toggle && (
    <>

      <div
        onClick={() => setToggle(false)}
        className="fixed inset-0 z-40"
      ></div>

      <div className="fixed right-0 top-0 z-50">
        <CartItem cartItems={cartItems} />
      </div>
    </>
  )
}

    </div>
  );
};

export default Home;