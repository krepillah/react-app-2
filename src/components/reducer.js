export function reducer(state, {type, payload}) {
    switch(type){
        case "SET_ITEMS":
            return {
                ...state,
                items: payload || [],
                loading: false,
            };
        case "ADD_TO_BASKET": {
            const itemIndex = state.order.findIndex((orderItem) => orderItem.mainId === payload.mainId);

            let newOrder = null;
            if(itemIndex < 0){
                const newItem = {
                    ...payload, 
                    quantity: 1,
                };
                newOrder = [...state.order, newItem]
            } else{
                newOrder = state.order.map((orderItem, index) => {
                    if(index === itemIndex){
                        return{
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else{
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.displayName,
            }
        };
        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                order: state.order.filter((el) => el.mainId !== payload.id),
            };
        case "DECREASE_QUANTITY":
            return {
                ...state,
                order: state.order.map((el) => {
                    if(el.mainId === payload.id){
                        const newQuantity = el.quantity - 1;
                        return {
                            ...el,
                            quantity: (newQuantity >= 1) ? newQuantity : 1
                        }
                    }else{
                        return el;
                    }
                }),
            };
        case "SHOW_CART":
            return {
                ...state,
                cartShown: !state.cartShown,
            };
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            };
        case "SET_FILTER":
            return {
                ...state,
                filter: payload.type,
            };
        case "SET_COUNT_SHOWN_ITEMS":
            return {
                ...state,
                countShownItems: payload.value,
            };
        case "SHOW_FILTER":
            return {
                ...state,
                filterShown: !state.filterShown,
            }
        default:
            return state;
    }
}