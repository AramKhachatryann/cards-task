import { useDispatch, useSelector } from "react-redux"
import { cardsSliceSelector, setCards } from "../../redux/slices/cardsSlice"
import "./Main.css"

const Main = () => {
    const cards = useSelector(cardsSliceSelector)
    const dispatch = useDispatch()

    const deleteBtn = (id) => {
        const arr = cards.filter(item => {
            return item.id !== id
        })
        dispatch(setCards(arr))
    }

    return(
        <main>
            <div className="cardsContainer">
                {cards.map(item => {
                    return (
                        <div key={item.id} className="cardDiv">
                            <span>{item.cardNumber}</span>
                            <button className="deleteBtn" onClick={() => deleteBtn(item.id)}>x</button>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default Main