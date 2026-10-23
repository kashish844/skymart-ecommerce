import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { MyStore } from "../Context/MyContext";
import CartItem from "./CartItem";

const ShopItems = () => {

    let {requiredProduct,setCartItems,setToggle,cartItems,toggle,searchProduct,sortByCategory,sortByPrice,isinCart} = useContext(MyStore);

    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen">

            {/* ================= SHOP SCREEN ================= */}

            <div
                className={`min-h-screen bg-[#0b0b0b] text-white transition-all duration-300 ${
                    toggle ? "blur-sm brightness-50" : ""
                }`}
            >

                {/* ================= NAVBAR ================= */}

                <nav className="mx-auto flex h-[75px] max-w-[1320px] items-center justify-between px-4">

                    {/* Logo */}

                    <NavLink
                        to="/home"
                        className="flex items-center gap-2"
                    >

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#b8ff00] text-xl text-black">
                            ⚡
                        </div>

                        <h1 className="text-xl font-bold">
                            Sky<span className="text-[#b8ff00]">Mart</span>
                        </h1>

                    </NavLink>


                    {/* Navigation */}

                    <div className="flex items-center gap-8">

                        <NavLink
                            to="/home"
                            className="text-zinc-500 hover:text-white"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/products"
                            className="text-[#b8ff00]"
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

                        <div className="flex items-center gap-2 rounded-xl border border-zinc-800 px-3 py-2">

                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#b8ff00] text-sm font-bold text-black">
                                K
                            </div>

                            <span className="text-sm text-zinc-300">
                                Kashish
                            </span>

                        </div>


                        <NavLink
                            
                            className="flex h-[42px] w-[45px] items-center justify-center rounded-xl border border-zinc-800 text-xl hover:border-zinc-500" onClick={()=>setToggle((prev)=>!prev)}
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


                {/* ================= SHOP HEADER ================= */}

                <main className="mx-auto max-w-[1320px] px-4 py-10">

                    <h1 className="text-4xl font-bold">
                        All Products
                    </h1>

                    <p className="mt-2 text-zinc-500">
                        {requiredProduct.length} products found
                    </p>


                    {/* ================= SEARCH ================= */}

                    <div className="mt-10 flex items-center gap-3 rounded-2xl border border-zinc-600 p-3">

                        {/* Search */}

                        <div className="flex flex-1 items-center rounded-xl border border-zinc-700 bg-[#1a1a1a] px-4">

                            <span className="mr-3 text-zinc-500">
                                🔍
                            </span>

                            <input
                                type="text" onChange={(e)=>searchProduct(e.target.value)}
                                placeholder="Search products..."
                                className="w-full bg-transparent py-3 outline-none placeholder:text-zinc-500"
                            />

                        </div>


                        {/* Category */}

                        <select onChange={(e)=>sortByCategory(e.target.value)} className="rounded-xl border border-zinc-700 bg-[#1a1a1a] px-5 py-3 text-white outline-none">

                            <option value="all">
                                All Categories
                            </option>

                            <option value="electronics">
                                Electronics
                            </option>

                            <option value="jewelery">
                                Jewellery
                            </option>

                            <option value="men's clothing">
                                Men's Clothing
                            </option>

                            <option value="women's clothing" >
                                Women's Clothing
                            </option>

                        </select>


                        {/* Sort */}

                        <select onChange={(e)=>sortByPrice(e.target.value)} className="rounded-xl border border-zinc-700 bg-[#1a1a1a] px-5 py-3 text-white outline-none">

                            <option value="featured">
                                Featured
                            </option>

                            <option value="low-high">
                                Price: Low to High
                            </option>

                            <option value="high-low">
                                Price: High to Low
                            </option>

                        </select>

                    </div>


                    {/* ================= PRODUCTS ================= */}

                    {
                        requiredProduct.length === 0 ? (
                            <p className="text-red-500 text-4xl mt-2">No Items found!</p>
                        ) : (
                            <div className="mt-6 grid grid-cols-5 gap-5">

                        {
                            requiredProduct.map((product,index) => {

                                return (

                                    <div 
                                        key={index}
                                        
                                        className="overflow-hidden cursor-pointer rounded-[25px] border border-zinc-700 bg-[#101010]"
                                    >

                                        {/* IMAGE */}

                                        <div className="relative flex h-[250px] items-center justify-center bg-white">

                                            <span className="absolute left-4 top-4 rounded-full bg-zinc-600 px-3 py-1 text-xs text-white">
                                                {product.category}
                                            </span>

                                            <img onClick={()=>navigate(`/details/${product.id}`)}
                                                src={product.image}
                                                alt={product.title}
                                                className="h-[190px] w-[190px] object-contain"
                                            />

                                        </div>


                                        {/* PRODUCT DETAILS */}

                                        <div className="p-4">

                                            <p className="text-xs text-zinc-600">
                                                {product.category}
                                            </p>


                                            <h2 className="mt-3 min-h-[48px] text-base font-semibold">
                                                {product.title}
                                            </h2>


                                            {/* Rating */}

                                            <div className="mt-3 flex items-center gap-2">

                                                <span className="text-yellow-400">
                                                    ★★★★★
                                                </span>

                                                <span className="text-xs text-zinc-500">
                                                    ({product.rating.count})
                                                </span>

                                            </div>


                                            <div className="my-3 border-t border-zinc-700"></div>


                                            {/* Price + Add */}

                                            <div className="flex items-center justify-between">

                                                <span className="text-xl font-bold text-[#b8ff00]">
                                                    ${product.price}
                                                </span>

                                               <button
    className="cursor-pointer rounded-full bg-[#b8ff00] px-4 py-2 text-sm font-semibold text-black"
    onClick={() => {
        if (!isinCart(product.id)) {
            setCartItems((prev) => [
                ...prev,
                { ...product, quantity: 1 }
            ]);
        }

        setToggle((prev)=>!prev);
    }}
>
    {isinCart(product.id) ? "✓ Added" : "🛒 Add"}
</button>

                                            </div>

                                        </div>

                                    </div>

                                );

                            })
                        }

                    </div>

                        )
                    }

            
                </main>


                {/* ================= FOOTER ================= */}

                <footer className="mt-20 border-t border-zinc-800 py-12 text-center">

                    <h2 className="text-2xl font-semibold text-[#b8ff00]">
                        SkyMart
                    </h2>

                    <p className="mt-3 text-sm text-zinc-500">
                        © 2026 SkyMart • Built with React
                    </p>

                </footer>

            </div>


            {/* ================= CART DRAWER ================= */}

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

export default ShopItems;