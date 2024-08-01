import Item from "./Item";

export default function ItemsList(props){
    const { items = [], addToBasket = Function.prototype } = props;
    
    if(!items.length){
        return <h3>Ничего не найдено</h3>
    }
    return(
        <div className="items">
            {items.map((element) => (
                <Item key={element.mainId} {...element} addToBasket={addToBasket}/>
            ))}
        </div>
    )
}