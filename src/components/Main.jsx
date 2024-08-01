import { useState, useEffect } from "react"
import { API_KEY, API_URL } from "../config";
import Preloader from "./Preloader";
import ItemsList from "./ItemsList";
import Cart from "./Cart";

export default function Main(){
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [cartShown, setCartShown] = useState(false);

    useEffect(function getItems(){
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
        .then(response => response.json())
        .then((data) => {
            if(data.shop){
                setItems(data.shop.reduce((arr, el) => 
                    ((arr.find(({mainId}) => el.mainId == mainId) || arr.push(el)), arr)
                  , []).slice(0, 20));
            }
            setLoading(false);
        });
    }, [])

    const addToBasket = (element) => {
        const itemCheck = order.findIndex((orderElement) => orderElement.mainId === element.mainId);

        if(itemCheck < 0){
            const newItem = {
                ...element, 
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else{
            const updateOrder = order.map((orderElement, index) => {
                if(index === itemCheck){
                    return{
                        ...orderElement,
                        quantity: orderElement.quantity + 1,
                    };
                } else{
                    return orderElement;
                }
            });
            setOrder(updateOrder);
        }
        
    }

    const showCart = () => {
        setCartShown(!cartShown);
    }

    return(
        <div className="content">
            <main>
                <Cart quantity={order.length} showCart={showCart}/>
                {loading ? <Preloader/> : <ItemsList items={items} addToBasket={addToBasket}/>}
            </main>
            <aside style={{display: (cartShown) ? "block" : "none"}}>
                123
            </aside>
        </div>
    )
}