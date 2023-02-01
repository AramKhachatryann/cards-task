import { useDispatch} from "react-redux"
import { addCards, sortCards } from "../../redux/slices/cardsSlice"
import "./Header.css"

const Header = () => {
    const dispatch = useDispatch()
    
    const addCard = () => {
        const a = Math.round(Math.round((Math.random() * 1000)) / Math.round(Math.random() + 2))
        const obj = {
            cardNumber: a,
            id: Date.now() + Math.random()
        }
        dispatch(addCards(obj))
    }

    const sort = () => {
        dispatch(sortCards())
    }

    return (
        <header>
            <div className="headerButtons">
            <button onClick={addCard}>add card</button>
            <button onClick={sort}>sort card</button>
            </div>
        </header>
    )
}

export default Header