export default function Item(props){
    const { 
        mainId, 
        displayName, 
        mainType, 
        price, 
        rarity, 
        displayAssets, 
        addToBasket = Function.prototype,
    } = props;
    return(
        <div id={mainId} className={"item " + rarity.id}>
            <div className="image-block">
                <img src={displayAssets[0].background} alt={displayName + '-картинка'}/>
                <div className="type-icon">
                    <img src={"/icons/"+ mainType + ".png"} alt={mainType + "-icon"}/>
                </div>
            </div>
            <div className="text-block">
                <div className="item-title" title={displayName}>{displayName}</div>
                <div className="card-price-block">
                    <span className="card-price">
                        {price.finalPrice}
                        <img src="/icons/vbucks-black.png" alt="vbucks-icon"/>
                    </span>
                    <button 
                        className="btn" 
                        onClick={() => addToBasket({mainId, displayName, price, displayAssets})}
                    >Купить</button>
                </div>
                
            </div>
        </div>
    )
}