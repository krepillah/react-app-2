import { useContext } from "react"
import { ShopContext } from "../context"

export default function Filter() {
    const { setFilter, setCountShownItems, filterShown } = useContext(ShopContext);
    return (
        <div className="filter-block" style={{display: (filterShown)?"block":"none"}}>
            <div className="filter-title">Сортировать</div>
            <div className="type-block">
                <label htmlFor="type-filter">Тип товара:</label>
                <select name="type-filter" onChange={(e) => setFilter(e.target.value)}>
                    <option value="all" default >Все</option>
                    <option value="bacpack">Рюкзак</option>
                    <option value="building_prop">Строение</option>
                    <option value="bundle">Набор</option>
                    <option value="emote">Эмоция</option>
                    <option value="glider">Планер</option>
                    <option value="outfit">Одежда</option>
                    <option value="pickaxe">Кирка</option>
                    <option value="sparks_guitar">Гитара</option>
                    <option value="sparks_song">Музыка</option>
                    <option value="vehicle_cosmeticvariant">Транспорт</option>
                    <option value="sparks_drum">Барабаны</option>            
                </select>
            </div>
            <div className="type-block">
                <label htmlFor="count-filter">Показывать товаров:</label>
                <select name="count-filter" onChange={(e) => setCountShownItems(e.target.value)}>
                    <option value="20" default >20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                </select>
            </div>
        </div>
    )
}