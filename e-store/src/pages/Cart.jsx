import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import CheckOutCard from "../components/CheckOutCard";
import { useEffect } from "react";
import { clearCart, getTotalPrice } from "../redux/cartRedux";

const Cart = () => {
  const dispatch = useDispatch()
  const {items, totalPrice} = useSelector(state => state.cart)

  useEffect(()=>{
     dispatch(getTotalPrice())
  },[dispatch, items])

  return (
    <div className="max-w-[1240px] mx-auto p-4">
      <h1 className="font-light text-center mb-4 text-2xl">YOUR BAG</h1>
      {/* top */}
      <div className="hidden border-b border-b-gray-300/50 sm:flex items-center justify-between p-5 mb-10">
        <button className="p-2 font-semibold cursor-pointer">
          CONTINUE SHOPPING
        </button>
        <div>
          <span className="underline cursor-pointer mx-2">Shopping bag({items.length})</span>
        </div>
        <button onClick={()=>dispatch(clearCart())} className="font-semibold text-red-600">Clear Cart</button>
      </div>

      {/* bottom */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* cart  */}

        <div className="flex-[2] flex flex-col gap-6 py-4">
          {
            items.map(item=>(
              <CartCard key={item._id} item={item} />
            ))
          }
        </div>

        {/* checkout */}
        <div className="flex-[1] border-[0.5px] border-gray-400 shadow-sm p-4 rounded-md h-min">
          <CheckOutCard totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
