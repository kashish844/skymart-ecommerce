import React, { useContext } from "react";
import { MyStore } from "../Context/MyContext";
import { useNavigate } from "react-router";

const CartItem = ({ cartItems }) => {
  let{setToggle,removeCard,clearCart,increment,decrement,checkOut} = useContext(MyStore);
  const navigate = useNavigate();

  localStorage.setItem("cartItems",JSON.stringify(cartItems));

    return (
        <div className="fixed top-0 right-0 w-[420px] h-screen bg-[#111111] text-white border-l border-zinc-700 z-50">

            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-700">

                <div className="flex items-center gap-3">
                    <div className="text-[#c8ff00] text-2xl">
                        🛍
                    </div>

                    <h2 className="text-2xl font-semibold">
                        Cart
                    </h2>

                    <span className="bg-[#c8ff00] text-black text-sm font-semibold px-3 py-1 rounded-full">
                        {cartItems.length} items
                    </span>
                </div>

                <button className="text-zinc-400 text-2xl hover:text-white" onClick={()=>setToggle((prev)=>!prev)} >
                    ×
                </button>

            </div>


            {/* CART ITEMS */}
            <div className="h-[calc(100vh-220px)] overflow-y-auto px-6 py-5">

                {
                    cartItems.length === 0  ? (

                        <div className="flex items-center flex-col justify-center h-full text-zinc-500">
                            <p>Your Cart is Empty</p>

                            <button
                className="mt-4 cursor-pointer bg-[#c8ff00] text-black px-5 py-2 rounded-xl" onClick={()=>setToggle((prev)=>!prev)}
            >
                Browse Products
            </button>
                        </div>

                        

                    ) : (

                        <div className="flex flex-col gap-4">

                            {
                                cartItems.map((product,index) => {

                                    return (
                                        

                                        <div
                                            key={index}
                                            className="border border-zinc-600 rounded-2xl p-4"
                                        >

                                            <div className="flex gap-4">

                                                {/* IMAGE */}
                                                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
                                                    <img
                                                        src={product.image}
                                                        alt={product.title}
                                                        className="w-16 h-16 object-contain"
                                                    />
                                                </div>


                                                {/* PRODUCT DETAILS */}
                                                <div className="flex-1">

                                                    <h3 className="text-base font-medium line-clamp-1">
                                                        {product.title}
                                                    </h3>

                                                    <p className="text-[#c8ff00] text-lg font-bold mt-2">
                                                        ${product.price}
                                                    </p>

                                                    <p className="text-zinc-500 text-sm">
                                                        ${product.price} each
                                                    </p>


                                                    {/* QUANTITY */}
                                                    <div className="flex items-center gap-4 mt-3">

                                                        <button className="w-8 h-8 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white" onClick={()=>decrement(product.id)}>
                                                            −
                                                        </button>

                                                        <span>
                                                            {product.quantity}
                                                        </span>

                                                        <button className="w-8 h-8 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white" onClick={()=> increment(product.id)} >
                                                            +
                                                        </button>

                                                    </div>

                                                </div>


                                                {/* DELETE */}
                                                <button className="text-red-400 hover:text-red-300 text-xl" onClick={()=>removeCard(product.id)}>
                                                    🗑
                                                </button>

                                            </div>

                                        </div>

                                    );
                                })
                            }

                        </div>

                    )
                }

            </div>


            {/* FOOTER */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#111111] border-t border-zinc-700 px-6 py-5">

                <div className="flex justify-between items-center mb-5">

                    <span className="text-zinc-400">
                        Total
                    </span>

                    <span className="text-2xl font-bold">
                        $
                        {
                            cartItems.reduce((total, product) =>
                                        total +  product.price * product.quantity,
                            0
                                )
                                .toFixed(2)
                        }
                    </span>

                </div>


                <button onClick={()=>{setToggle((prev)=>!prev);
                checkOut(cartItems)
                }} className="w-full bg-[#c8ff00] cursor-pointer  text-black py-4 rounded-xl font-semibold text-lg hover:scale-[1.02] transition">
                    Checkout →
                </button>

                <button className="w-full text-zinc-500 mt-4 hover:text-white" onClick={(()=>clearCart(cartItems))} >
                    Clear cart
                </button>

            </div>

        </div>
    );
};

export default CartItem;