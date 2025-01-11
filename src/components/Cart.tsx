import { MdClose } from "react-icons/md";
import { useAppSelector } from "../redux/hooks";
import CartProduct from "./CartProduct";


export default function Cart({setCart} : any) {
    const product = useAppSelector((state) => state.cartReducer);

    return(
        <div className="flex fixed h-screen bg-gray-700 bg-opacity-70 justify-end w-full">

            <div className=" z-10 bg-white sm:w-screen md:w-1/2 lg:w-1/4 p-4">
                <div className="flex justify-between">
                    <h3 className="text-xl">Cart</h3>
                    <div onClick={() => setCart(false)}  className="text-2xl"><MdClose/></div>
                </div>
                {product.map((p)=> (
                    <CartProduct
                        key={p.id}
                        id={p.id}
                        title={p.title}
                        img={p.img}
                        price={p.price}
                        quantity={p.quantity}                
                    />
                ))}
                <div className="flex justify-between items-center border-t pt-2 mt-4">
                    <h3 className="text-xl">Total</h3>
                    <h3 className="text-xl">${product.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h3>
                </div>
                </div>
        </div>
    )

}