export function reducer(state, {type, payload}) {
    switch(type){
        case "ADD_TO_BASKET": {
            const itemCheck = state.order.findIndex((orderElement) => orderElement.mainId === payload.mainId);

            let newOrder = null;
            if(itemCheck < 0){
                const newItem = {
                    ...payload, 
                    quantity: 1,
                };
                newOrder = [...state.order, newItem]
            } else{
                newOrder = state.order.map((orderElement, index) => {
                    if(index === itemCheck){
                        return{
                            ...orderElement,
                            quantity: orderElement.quantity + 1,
                        };
                    } else{
                        return orderElement;
                    }
                });

                return {
                    ...state,
                    order: newOrder
                }
            }
        }
        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                order: state.order.filter((el) => el.mainId !== payload.id)
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
            }
        case "SHOW_BASKET":
            return {
                ...state,
                cartShown: !state.cartShown,
            }
        default:
            return state;
    }
}