import { useContext } from "react";
import { ShopContext } from "../context";

export default function Cart(props){

    const { order, showCart, showFilter } = useContext(ShopContext);
    const quantity = order.length;

    return (
        <div className="cart-header-block">
            <img src="/icons/setting.png" alt="settings icon" onClick={showFilter}/>
            <img src="/icons/shopping-bag-white.png" alt="cart icon" onClick={showCart}/> 
            {(quantity) ? <span className="cart-quantity">{quantity}</span> : ""}
        </div>
    )
}