import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        let cardData = structuredClone(cartItems); // use directly, no import needed
        if (cardData[itemId]) {
            if (cardData[itemId][size]) {
                cardData[itemId][size] += 1;
            } else {
                cardData[itemId][size] = 1;
            }
        } else {
            cardData[itemId] = {};
            cardData[itemId][size] = 1;
        }
        setCartItems(cardData);
    };

    const getCartCount = () => {
        let totalCount=0
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try{
                    if (cartItems[items][item] > 0){
                        totalCount += cartItems[items][item];
                    }
                } catch(error){

                }
            }
        }
        return totalCount;
    }

    const updateQuantity= async(itemId,size,quantity)=>{
        let cardData = structuredClone(cartItems);
        cardData[itemId][size]=quantity;
        setCartItems(cardData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try{
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch(error){

                }
            }

        }
        return totalAmount;    
    }

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
