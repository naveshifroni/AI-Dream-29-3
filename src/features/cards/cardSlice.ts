import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cards } from "../../examples/bots";

export type Gender = "Male" | "Female" | "Androgyny" | "Robot"; // לעשות טייפים לשאר הפרופרטיס הרלבנטיים

export type Card = {
    id: string;
    name: string;
    img: string;
    description: string;
    age: number;
    gender: Gender;
    sensitive: boolean;
    smart: boolean;
    funny: boolean;
}


export interface CardsState {
cards: Card[];
};

const initialState: CardsState = {
cards: cards,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action:PayloadAction<Card>) => {
        state.cards.push(action.payload);
    },
    editCard: (state, action:PayloadAction<Card>) => {
      const cardToEdit = action.payload;

      const index = state.cards.findIndex((c) => c.id === action.payload.id)

      state.cards[index] = cardToEdit;
    },
    deleteCard: (state, action:PayloadAction<string>) => {

      const index = state.cards.findIndex((c) => c.id === action.payload);
      state.cards.splice(index, 1);
    },
  },
});

export const {addCard, deleteCard, editCard} = cardsSlice.actions;
export default cardsSlice.reducer;