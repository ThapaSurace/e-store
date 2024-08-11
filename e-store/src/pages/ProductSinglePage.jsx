import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartRedux";
import toast from "react-hot-toast";
import { useSingleProduct } from "../api/apiCall";

const ProductSinglePage = () => {
  const [quantity,setQuantity] = useState(1)

  const dispatch = useDispatch()

  const {id} = useParams()
  const {data,isLoading,error} = useSingleProduct(id)

  if(isLoading) return <span>loading...</span>
  if(error) return  <span>Erro fetching data!</span>

  const handleQuantity = (type) => {
    if(type === "dec"){
      quantity > 1 && setQuantity(quantity - 1)
    }else{
      setQuantity(quantity + 1)
    }
  }

  const handleAddToCart = () => {
     dispatch(addToCart({...data, quantity:quantity}))
     toast.success("Item added to cart successfully!")
  }

  return (
    <div className="container my-10">
    <div className="flex flex-col items-center md:flex-row gap-6 md:gap-20">
      {/* img  */}
      <div className="md:flex-[1] flex-1">
        <img
          src={data.img}
          alt="Elton John by O'Neill"
          className="w-full h-96 aspect-square object-cover object-center rounded-xl shadow-md"
        />
        <div className="mt-4 font-light italic text-lg flex gap-1 justify-center">
          <span>Genre: </span>
          <div className="flex gap-1">
             {
              data.genre.map(gen=>(
                <span key={gen}>{gen}</span>
              ))
             }
          </div>
        </div>
      </div>
      {/* info */}
      <div className="md:flex-[2] flex-1">
        <h1 className="text-3xl font-semibold text-slate-900 mb-3">
        {data.title}
        </h1>
        <span className="text-2xl text-slate-900">${data.price}</span>
        <hr className="my-4" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <h3 className="font-semibold text-gray-900 mr-1">Author:</h3>
            <span>{data.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <h3 className="font-semibold text-gray-900 mr-1">Language:</h3>
            <span>{data.language}</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Synopsis</h3>
            <p className="text-slate-600 leading-6 tracking-wide">
             {
              data.synopsis
             }
            </p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col gap-1 items-start">
          <div className="flex items-center gap-2 my-6">
            <div onClick={()=>handleQuantity('inc')} className="border border-slate-600 p-2 rounded-md cursor-pointer">
              <AiOutlinePlus size={25}  />
            </div>
            <span className="text-2xl">{quantity}</span>
            <div onClick={()=>handleQuantity('dec')} className="border border-slate-600 p-2 rounded-md cursor-pointer">
              <AiOutlineMinus size={25}  />
            </div>
          </div>
          <button onClick={handleAddToCart} className="uppercase bg-slate-950 hover:bg-slate-800 hover:shadow-sm text-white font-medium px-4 py-2 rounded-lg">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductSinglePage;