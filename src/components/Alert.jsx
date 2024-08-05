import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

export default function Alert(){
    const {alertName = '', closeAlert } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 2000);

        return () => {
            clearTimeout(timerId);
        }
    }, [alertName]);

    return (
        <div id="toast-container">
            <div className="toast">{alertName} добавлен в корзину</div>
        </div>
    )
}