import { useContext } from "react";
import { ShopContext } from "../context";

import Item from "./Item";

export default function ItemsList(){
    const { items = [] } = useContext(ShopContext);
    
    if(!items.length){
        return <h3>Ничего не найдено</h3>
    }
    return(
        <div className="items">
            {items.map((element) => (
                <Item key={element.mainId} {...element}/>
            ))}
        </div>
    )
}