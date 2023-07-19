import React from "react";
import { useFetch } from "./Context";

const Cart = () =>{
    let {cartItem}=useFetch()
    const {images, category,title, description, rating, price, id} = cartItem;
}

export default Cart;