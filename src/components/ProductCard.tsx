import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai"
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cartSlice";
import toast from "react-hot-toast";

interface propType{
    id: number;
    title: string;
    img: string;
    price: number;
    genre: string;
}

export default function ProductCard({id, title, img, price, genre}: propType) {

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

    return(
        <div className="border border-gray-200">
            <div className="text-center border-b border-gray-200">
                <img className="inline-block h-60" src={img} alt={title} />
            </div>
            <div className="px-8 py-4">
                <p className="text-gray-500 text-[14px] font-medium">{genre}</p>
                <h2 className="font-medium">{title}</h2>

                <div className="mt-3 flex text-[#ffb21d] items-center">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <p className="text-[14px] text-gray-600 ml-2">(3 Reviews)</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <h2 className="font-medium text-accent text-xl">${price}</h2>
                    <div className="flex gap-2 items-center bg-pink transition duration-300 ease-out rounded-md text-white px-4 py-2 cursor-pointer hover:bg-accent" onClick={addProductToCart}>
                        <AiOutlineShoppingCart />
                        <p>Add to Cart</p>
                    </div>
                </div>
            </div>
        </div>
    )
}