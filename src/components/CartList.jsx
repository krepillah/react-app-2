import CartItem from "./CartItem";
import { useContext } from "react";
import { ShopContext } from "../context";
export default function CartList() {

    const {order} = useContext(ShopContext);

    const summ = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity;
    }, 0)

    return(
        <div className="cart-block">
            <div className="cart-inner-block">
                {  order.length ? order.map((item) => (
                    <CartItem key={item.mainId} {...item} />
                )) : <div className="cart-empty">Корзина пуста</div>
                }
            </div>
            <div className="cart-summ">
                Общая стоимость: {summ}
            </div>
        </div>
    )
}