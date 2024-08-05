import { useEffect, useContext } from "react"
import { API_KEY, API_URL } from "../config";
import { ShopContext } from "../context";

import Preloader from "./Preloader";
import ItemsList from "./ItemsList";
import Cart from "./Cart";
import CartList from "./CartList";
import Alert from "./Alert";
import Filter from "./Filter";

export default function Main(){
    const { 
        loading, 
        order, 
        cartShown, 
        setItems, 
        alertName, 
        filter, 
        countShownItems, 
        filterShown 
    } = useContext(ShopContext);

    useEffect(function getItems(){
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
        .then(response => response.json())
        .then((data) => {
            if(data.shop){
                let temp = data.shop.reduce((arr, el) => 
                    ((arr.find(({mainId}) => el.mainId == mainId) || arr.push(el)), arr)
                  , []);
                if (filter !== "all"){
                    setItems(temp.filter((el) => el.mainType === filter).slice(0, countShownItems));
                } else{
                    setItems(temp.slice(0, countShownItems));
                }
            }
        });
    }, [filter, countShownItems])

    const asideStyle = {
        display: (cartShown) ? "block" : "none",
        paddingTop: (filterShown) ? "200px" : "30px",
    };

    const mainStyle = {
        marginRight: (cartShown) ? "400px" : "0",
        overflow: (loading) ? "hidden" : "auto",
    };

    return(
        <div className="content">
            <main style={mainStyle}>
                <Filter/>
                <Cart quantity={order.length} />
                {loading ? <Preloader/> : <ItemsList />}
                {alertName && <Alert name={alertName}/>}
            </main>
            <aside style={asideStyle}>
                {cartShown && <CartList />}
            </aside>
        </div>
    )
}