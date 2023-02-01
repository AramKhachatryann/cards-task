import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cards: []
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCards: (state, {payload}) => {
            state.cards.push(payload)
        },
        setCards: (state, {payload}) => {
            state.cards= payload
        },
        sortCards: (state) => {
            const arr = state.cards.sort((b,a) => b.cardNumber - a.cardNumber)
            state.cards = arr
        }
    },
})

export const cardsSliceSelector = state => state.cards.cards

export const {setCards, addCards, sortCards} = cardsSlice.actions

export default cardsSlice.reducer