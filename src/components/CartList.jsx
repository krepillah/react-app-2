import CartItem from "./CartItem";
export default function CartList(props) {
    const { order = [], 
        removeFromBasket = Function.prototype,
        decreaseQuantity = Function.prototype,
        addToBasket = Function.prototype
    } = props;

    const summ = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity;
    }, 0)

    return(
        <div className="cart-block">
            <div className="cart-inner-block">
                {  order.length ? order.map((item) => (
                    <CartItem key={item.mainId} {...item} removeFromBasket={removeFromBasket} decreaseQuantity={decreaseQuantity} addToBasket={addToBasket}/>
                )) : <div className="cart-empty">Корзина пуста</div>
                }
            </div>
            <div className="cart-summ">
                Общая стоимость: {summ}
            </div>
        </div>
    )
}