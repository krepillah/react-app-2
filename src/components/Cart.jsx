import { useContext } from "react";
import { ShopContext } from "../context";

export default function Cart(props){

    const { order, showCart } = useContext(ShopContext);
    const quantity = order.length;

    return (
        <div className="cart-header-block" onClick={showCart}>
            <img src="/icons/shopping-bag-white.png" alt="cart-image" /> 
            {(quantity) ? <span className="cart-quantity">{quantity}</span> : ""}
        </div>
    )
}