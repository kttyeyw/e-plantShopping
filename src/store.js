import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
      addItem: (state, action) => {
        state.push(action.payload);
      },
      // другие редьюсеры
    },
  });
  export const cartReducer = cartSlice.reducer;

 const store = configureStore({
    reducer: {
        cart: cartReducer,
        
    },
});
export default store;
 
// Экспорт создателей действий (action creators)
export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item,
});

export const removeItem = (name) => ({
  type: 'REMOVE_ITEM',
  payload: name,
});

export const updateQuantity = (name, quantity) => ({
  type: 'UPDATE_QUANTITY',
  payload: { name, quantity },
});

// Экспорт редюсера по умолчанию
const cartReducer = (state, action) => {
  // ...логика редюсера
};


