import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { MdClose } from "react-icons/md";
import { addToCart,removeFromCart } from "../redux/features/cartSlice";
import { toast } from "react-hot-toast";


interface propsType {
    id: number;
    img: string;
    title: string;
    price: number;
    quantity: number;
}

const CartProduct: React.FC<propsType> = ({ id, img, title, price, quantity }) => {
    const dispatch = useAppDispatch();
    const addProductToCart = () => {
        const payload = {
            id,
            title,
            img,
            price,
            quantity: 1
        };

        
        
        dispatch(addToCart(payload));
        toast.success('Added to cart');
    }
    const removeProductfromCart = () => {
        const payload = {
            id,
            title,
            img,
            price,
            quantity,
        };

        
        dispatch(removeFromCart(payload));
        toast.error('Removed from cart');
    }

    return (
        <div className="flex mt-2 border border-gray-300 justify-between items-center">
            <div className="flex items-center gap-4">
                <img src={img} alt={title} className="h-[80px]" />
                <div>
                    <h2 className="text-lg font-medium">{title}</h2>
                    <p className="text-gray-500">${price}</p>
                </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-300 cursor-pointer">
                        <div className="border border-gray-300 px-1 hover:opacity-50 " onClick={addProductToCart} >+</div>
                        <div className="font-bold px-1">{quantity}</div>
                    </div>
                    <MdClose onClick={removeProductfromCart} className="text-xl relative right-4"/>
                </div>
        </div>
    )
};

export default CartProduct;