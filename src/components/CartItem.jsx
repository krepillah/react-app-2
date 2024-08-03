export default function CartItem(props){
    const {
        mainId, 
        displayName, 
        price,
        displayAssets,
        quantity,
        removeFromBasket = Function.prototype,
        addToBasket = Function.prototype,
        decreaseQuantity = Function.prototype
    } = props;

    return (
        <div className="cart-item" id={mainId}>
            <img src={displayAssets[0].background} alt="cart item image" className="cart-item-image"/>
            <div className="cart-item-data">
                <div className="cart-item-title">{displayName}</div>
                <div className="cart-item-price">
                    <div className="item-counter">
                        <span 
                            className="decrease" 
                            style={{color: (quantity > 1) ? "inherit" : "#b5b5b5"}} 
                            onClick={() => decreaseQuantity(mainId)}
                        >-</span>
                        <span>{quantity}</span>
                        <span 
                            className="increase" 
                            onClick={() => addToBasket({mainId, displayName, price, displayAssets})}
                        >+</span>
                    </div>
                    <span>{price.finalPrice*quantity}</span>
                </div>
            </div>
            <div className="close-icon-block" onClick={() => removeFromBasket(mainId)}>
                <img 
                    src="/icons/close-black.png" 
                    alt="close icon" 
                    className="close-icon" 
                />
            </div>
            
        </div>
    )
}