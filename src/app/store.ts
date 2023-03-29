import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cardsReducer from '../features/cards/cardSlice';
import userReducer from "../features/user/userSlice";
import newsReducer from "../features/news/newsSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    news: newsReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
