import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { addToCart, decreaseCartItem, deleteFromCart } from '../redux/cartRedux';
import toast from 'react-hot-toast';

const CartCard = ({item}) => {
  const dispatch = useDispatch()

  const handleDeleteFromCart = () => {
    dispatch(deleteFromCart(item))
    toast.success("Item deleted successfully from cart")
  }

  return (
    <div className="flex justify-between gap-10 p-4  border-b  relative cursor-pointer">
      <div className="flex gap-2 flex-1">
        <div className="h-32 w-32">
          <img
            src={item.img}
            alt="image"
            className="h-full w-full object-cover object-center rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold">{item.title}</span>
          <span className="text-sm">${item.price}</span>
          <div>
            <span className="text-sm text-gray-400">{item.language}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4 items-center">
        <div className="flex items-center gap-2">
          <div
          
            className=" p-2 border border-slate-500 cursor-pointer rounded-md"
          >
            <AiOutlinePlus onClick={()=>dispatch(addToCart(item))} className="" />
          </div>
          <span>{item.quantity}</span>
          <div
            className=" p-2 border border-slate-500 cursor-pointer rounded-md"
          >
            <AiOutlineMinus onClick={()=>dispatch(decreaseCartItem(item))} className="cursor-pointer" />
          </div>
        </div>
        <span className="text-light text-xl">
          ${item.price * item.quantity}
        </span>
      </div>
      <div
        className="cursor-pointer hover:text-red-500"
      >
        <RxCross2 onClick={handleDeleteFromCart} size={25} />
      </div>
    </div>
  )
}

export default CartCard