import { useEffect, useContext } from "react"
import { API_KEY, API_URL } from "../config";
import { ShopContext } from "../context";

import Preloader from "./Preloader";
import ItemsList from "./ItemsList";
import Cart from "./Cart";
import CartList from "./CartList";
import Alert from "./Alert";

export default function Main(){
    const { loading, order, cartShown, setItems, alertName } = useContext(ShopContext);

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
        });
    }, [])

    return(
        <div className="content">
            <main style={{marginRight: (cartShown) ? "400px" : "0"}}>
                <Cart quantity={order.length} />
                {loading ? <Preloader/> : <ItemsList />}
                {alertName && <Alert name={alertName}/>}
            </main>
            <aside style={{display: (cartShown) ? "block" : "none"}}>
                {cartShown && <CartList />}
            </aside>
        </div>
    )
}