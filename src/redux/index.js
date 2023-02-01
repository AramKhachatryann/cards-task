import { combineReducers } from "@reduxjs/toolkit";
import cardsSlice from "./slices/cardsSlice";

export const rootReducer = combineReducers({
    cards: cardsSlice
})