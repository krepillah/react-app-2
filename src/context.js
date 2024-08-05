import { createContext, useReducer } from "react";
import { reducer } from "./components/reducer";

export const ShopContext = createContext();

const initialState = {
    items: [],
    loading: true,
    order: [],
    cartShown: false,
    filterShown: false,
    alertName: '',
    filter: 'all',
    countShownItems: 20,
}

export const ContextProvider = ({children}) => {
    const [ value, dispatch ] = useReducer(reducer, initialState);

    value.removeFromBasket = (itemId) => {
        dispatch({type: "REMOVE_FROM_BASKET", payload: {id: itemId}});
    };

    value.addToBasket = (item) => {
        dispatch({type: "ADD_TO_BASKET", payload: item});
    };

    value.decreaseQuantity = (itemId) => {
        dispatch({type: "DECREASE_QUANTITY", payload: {id: itemId}});
    };

    value.showCart = () => {
        dispatch({type: "SHOW_CART"});
    };

    value.setItems = (data) => {
        dispatch({type: "SET_ITEMS", payload: data});
    };

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' });
    };

    value.setFilter = (value) => {
        dispatch({ type: "SET_FILTER" ,  payload: {type: value}});
    };

    value.setCountShownItems = (value) => {
        dispatch({ type: "SET_COUNT_SHOWN_ITEMS", payload: {value: value}});
    };

    value.showFilter = () => {
        dispatch({ type: "SHOW_FILTER"});
    }

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
    
}