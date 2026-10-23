import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { MyStore } from '../Context/MyContext';
import CartItem from './CartItem';

const ProductDetail = () => {

    let {id} = useParams();

    let {singleData,setSingleData,toggle,setToggle,setCartItems,cartItems} = useContext(MyStore);
    const navigate = useNavigate();

    let singleProductData = async () => {
        try {
            let response = await axios.get(
                `https://fakestoreapi.com/products/${id}`
            );

            setSingleData(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        singleProductData();
    },[]);


    return (

        <div className="min-h-screen bg-[#0b0b0b] text-white">

            {/* BREADCRUMB */}
            <div
        className={`min-h-screen bg-[#0b0b0b] text-white transition-all duration-300 ${
          toggle ? "blur-sm brightness-50" : ""
        }`}
      >

            <div className="mx-auto max-w-[1320px] px-4 pt-8">

                <div className="flex items-center gap-3 text-zinc-500">

                    <span className="text-lg cursor-pointer" onClick={()=>navigate('/products')}>
                        ←
                    </span>

                    <span className='cursor-pointer' onClick={()=>navigate('/products')}>
                        Products
                    </span>

                    <span>
                        /
                    </span>

                    <span>
                        {singleData?.category}
                    </span>

                    <span>
                        /
                    </span>

                    <span className="text-zinc-300">
                        {singleData?.title}
                    </span>

                </div>


                {/* MAIN CARD */}

                <div className="mt-8 grid grid-cols-2 gap-16">


                    {/* ================= IMAGE ================= */}

                    <div className="flex h-[590px] items-center justify-center rounded-[28px] bg-white p-8">

                        <img
                            src={singleData?.image}
                            alt={singleData?.title}
                            className="h-[500px] w-[500px] object-contain"
                        />

                    </div>


                    {/* ================= PRODUCT DETAILS ================= */}

                    <div className="pt-2">

                        {/* CATEGORY */}

                        <span className="inline-block rounded-full border border-[#b8ff00]/40 bg-[#b8ff00]/10 px-4 py-1 text-sm text-[#b8ff00]">
                            {singleData?.category}
                        </span>


                        {/* TITLE */}

                        <h1 className="mt-6 text-4xl font-bold leading-tight">
                            {singleData?.title}
                        </h1>


                        {/* RATING */}

                        <div className="mt-6 flex items-center gap-3">

                            <span className="text-xl text-yellow-400">
                                ★★★★★
                            </span>

                            <span className="text-lg font-semibold">
                                {singleData?.rating?.rate}
                            </span>

                            <span className="text-zinc-500">
                                ({singleData?.rating?.count} reviews)
                            </span>

                        </div>


                        {/* LINE */}

                        <div className="my-7 border-t border-zinc-700"></div>


                        {/* PRICE */}

                        <p className="text-5xl font-bold text-[#b8ff00]">
                            ${singleData?.price}
                        </p>


                        <div className="my-7 border-t border-zinc-700"></div>


                        {/* DESCRIPTION */}

                        <p className="text-lg leading-7 text-zinc-400">
                            {singleData?.description}
                        </p>


                        {/* ADD TO CART + HEART */}

                        <div className="mt-8 flex gap-3">

                            <button
                                className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-[#b8ff00] py-4 text-lg font-semibold text-black transition hover:scale-[1.02] cursor-pointer" onClick={()=>{setCartItems((prev)=>[...prev,{...singleData,quantity:1}]);
                                    setToggle((prev)=>!prev);
                                }}
                            >
                                🛒 Add to Cart
                            </button>

                            <button
                                className="flex h-[58px] w-[70px] items-center justify-center rounded-2xl border border-zinc-700 text-2xl text-zinc-400 hover:border-zinc-500 hover:text-white"
                            >
                                ♡
                            </button>

                        </div>


                        {/* FEATURES */}

                        <div className="mt-7 grid grid-cols-3 gap-3">

                            <div className="rounded-2xl border border-zinc-700 p-5 text-center">

                                <div className="text-xl text-[#b8ff00]">
                                    🚚
                                </div>

                                <p className="mt-3 font-semibold">
                                    Free Delivery
                                </p>

                                <p className="mt-1 text-xs text-zinc-500">
                                    On orders $50+
                                </p>

                            </div>


                            <div className="rounded-2xl border border-zinc-700 p-5 text-center">

                                <div className="text-xl text-[#b8ff00]">
                                    🛡
                                </div>

                                <p className="mt-3 font-semibold">
                                    Secure Pay
                                </p>

                                <p className="mt-1 text-xs text-zinc-500">
                                    256-bit SSL
                                </p>

                            </div>


                            <div className="rounded-2xl border border-zinc-700 p-5 text-center">

                                <div className="text-xl text-[#b8ff00]">
                                    ↻
                                </div>

                                <p className="mt-3 font-semibold">
                                    Easy Returns
                                </p>

                                <p className="mt-1 text-xs text-zinc-500">
                                    30-day policy
                                </p>

                            </div>

                        </div>


                        {/* PREVIOUS / NEXT */}

                        <div className="mt-12 grid grid-cols-2 gap-4">

                            <button
                                className="rounded-2xl border border-zinc-700 bg-[#222222] py-4 font-semibold hover:bg-[#2a2a2a]"
                            >
                                ← Previous
                            </button>

                            <button
                                className="rounded-2xl bg-[#b8ff00] py-4 font-semibold text-black hover:scale-[1.01]"
                            >
                                Next →
                            </button>

                        </div>

                    </div>

                </div>

            </div>

            </div>
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
    )
}

export default ProductDetail