export default function Cart(props){
    const { quantity = 0, showCart = Function.prototype } = props;

    return (
        <div className="cart-block" onClick={showCart}>
            <img src="/icons/shopping-bag-white.png" alt="cart-image" /> 
            {(quantity) ? <span className="cart-quantity">{quantity}</span> : ""}
        </div>
    )
}