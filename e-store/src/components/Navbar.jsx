import React, { useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { newRequest } from "../utils/newRequest";
import toast from "react-hot-toast";
import { logout } from "../redux/authRedux";
import { getTotalQuantity } from "../redux/cartRedux";

const Navbar = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)

  const {totalQuantity, items} = useSelector(state => state.cart)


  useEffect(()=>{
    dispatch(getTotalQuantity())
  },[dispatch,items])
  
  const handleLogout = async () => {
    try {
      const res = await newRequest.post('/auth/logout')
      toast.success(res.data)
      dispatch(logout())
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="border-b sticky top-0 py-4 bg-white z-50 shadow">
      <div
        className="max-w-6xl mx-auto px-4 flex justify-between 
       items-center"
      >
        {/* left */}
        <div className="hidden md:flex gap-1 items-center">
          <span className="text-lg text-slate-800">EN</span>
          <input type="text" placeholder="search" />
        </div>

        {/* middle */}
        <div className="text-2xl font-semibold text-slate-950">
          <Link to="/">E-Store</Link>
        </div>

        {/* right */}
        <div className="flex gap-2 items-center uppercase">
          {user ? (
            <span onClick={handleLogout} className="cursor-pointer">logout</span>
          ) : (
            <>
              <Link to="/register">
                <span className="cursor-pointer">Register</span>
              </Link>

              <Link to="/login">
                <span className="cursor-pointer">login</span>
              </Link>
            </>
          )}
          <Link to='/cart'>
            <div className="relative">
              <CiShoppingCart size={30} />
              <div
                className="absolute top-0 left-4 
            bg-red-600 text-white w-4 h-4 rounded-full
            flex justify-center items-center"
              >
                {totalQuantity}
              </div>
            </div>
          </Link>
          {user?.isAdmin && <Link to='/dashboard/productlist'>
            <span className="ml-3">Dashboard</span>
          </Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
