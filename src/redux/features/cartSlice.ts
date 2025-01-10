import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct{
    id: number;
    title: string;
    img: string;
    price: number;
    quantity: number;
}

const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers:{
        addToCart: (state, action: PayloadAction<IProduct>) => {
            if(state.findIndex((p) => p.id ===action.payload.id) === -1){
                state.push(action.payload);
            }else{
                return state.map((p) => {
                    return p.id === action.payload.id ? {...p, quantity: p.quantity + 1} : p;
                })
            }
        },
        removeFromCart: (state, action: PayloadAction<IProduct>) => {
            return state.filter((p) => p.id !== action.payload.id);
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;