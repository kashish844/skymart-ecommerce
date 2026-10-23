
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ShopItems from "../pages/ShopItems";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {

    let navigate = useNavigate();
    const [formData, setFormData] = useState(JSON.parse(localStorage.getItem("users")) || []);
    

    const [requiredProduct, setrequiredProduct] = useState([]);
    const [products, setProductsData] = useState([]);
    const[cartItems,setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
    const[toggle,setToggle] = useState(false);
    const[topRated,settopRated] = useState([]); 
    const[newArrivals,setNewArrivals] = useState([]);
    const[singleData,setSingleData] = useState([]);

    // console.log(cartItems);

    const getProductsData = async () => {
        let response = await axios.get(
            "https://fakestoreapi.com/products"
        );
        setProductsData(response.data);
        setrequiredProduct(response.data);
    
        let sortByRate = [...response.data].sort((a,b)=>{
            return b.rating.rate - a.rating.rate;
        }).slice(0,4);
        settopRated(sortByRate);

        let sortByArrivals = [...response.data].sort((a,b)=>{
            return b.id-a.id;
        }).slice(0,4);
        setNewArrivals(sortByArrivals);

    };

    useEffect(() => {
        getProductsData();
    }, []);
    const handleProduct = (category) => {

        if (category !== "all") {
            let filteredProduct = products.filter((value) => {
                return value.category === category;
            });
            setrequiredProduct(filteredProduct);

        } else {

            setrequiredProduct(products);
        }
    };

    const removeCard = (id)=>{
        let filter = cartItems.filter((val)=>{
            return val.id !== id;
        })
        setCartItems(filter);
    }

    const searchProduct = (value)=>{
        let filteredList = products.filter((val)=>{
             return  val.title.toLowerCase().includes(value.toLowerCase());
        })

        setrequiredProduct(filteredList);
    }

    const sortByCategory = (category)=>{
        if(category !== "all"){
             let filteredProduct = products.filter((value) => {
                return value.category === category;
            });
            setrequiredProduct(filteredProduct);
        }
        else{
            setrequiredProduct(products);
        }
    }

    const sortByPrice = (price)=>{
        if(price !== "featured"){
            if(price === "low-high"){
                let filterdList = [...products].sort((a,b)=>{
                    return a.price - b.price;
                })
                setrequiredProduct(filterdList);
            }
            if(price === "high-low"){
                let filteredList = [...products].sort((a,b)=>{
                    return b.price - a.price;
                })
                setrequiredProduct(filteredList);
            }
        }
        else{
            setrequiredProduct(products);
        }
    }

    const clearCart = (items)=>{
        let remove = cartItems.filter((val)=>{
            return val === items;
        })
        setCartItems(remove);
    }

    const increment = (id)=>{
        setCartItems((prev)=>{
           return prev.map((val)=>{
                return val.id === id ? {...val,quantity:val.quantity+1} : val 
            })
        })
    }

    const decrement = (id)=>{
        setCartItems((prev)=>{
            return prev.map((val)=>{
                return val.id === id ? {...val,quantity:val.quantity-1}:val;
            }).filter((val)=>val.quantity>0);
        })
    }

    const checkOut = (items)=>{
        let filter = cartItems.filter((item)=>{
            return item === items;
        })
        alert("🎉 Congratulations! Order placed Successfully");
        setCartItems(filter);
    }

    const isinCart = (id)=>{
        let find = cartItems.find((val)=>{
            return val.id === id 
        })

        return find;
    }

    let isinHome = (id)=>{
        let find = cartItems.find((val)=>{
            return val.id === id;
        })
        return find;
    }

    return (
        <MyStore.Provider value={{formData,setFormData,products,setProductsData,requiredProduct,setrequiredProduct,handleProduct,cartItems,setCartItems,toggle,setToggle,removeCard,searchProduct,sortByCategory,sortByPrice,settopRated,topRated,newArrivals,clearCart,increment,decrement,checkOut,singleData,setSingleData,isinCart,isinHome}}>
            {children}
        </MyStore.Provider>
    );
};
