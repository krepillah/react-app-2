import { useContext } from "react";
import { ShopContext } from "../context";

export default function Item(props){

    const { 
        mainId, 
        displayName, 
        mainType, 
        price, 
        rarity, 
        displayAssets, 
    } = props;

    const {addToBasket} = useContext(ShopContext);

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
                        className="add-to-cart-button" 
                        onClick={(e) => {
                            addToBasket({mainId, displayName, price, displayAssets});
                            const button = e.currentTarget;
                            button.classList.remove('animate-revert');
                            setTimeout(() => {
                                button.classList.add('animate-revert');
                            }, 0);
                        }}
                    >Купить</button>
                </div>
                
            </div>
        </div>
    )
}