import React from 'react'
import { BiCart } from 'react-icons/bi'
import { FaExpandArrowsAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {
  return (
    <div className='bg-white border rounded-xl 
    cursor-pointer group p-3 space-y-4'
    >
        {/* img and action */}
        <div className=' aspect-square rounded-xl relative'>
            <img 
            src={item.img} 
            alt={item.title}
            className='w-full aspect-square object-center 
            object-cover shadow'
            />
            <div className='opacity-0 group-hover:opacity-100'>
                <div className='flex gap-2 justify-center items-center 
                absolute bottom-5 w-full'>
                 <BiCart className='text-4xl bg-white p-1 
                 rounded-full hover:scale-110 transition-all
                 duration-300 ease-in-out' />
                 <Link to={`/product/${item._id}`}>
                 <FaExpandArrowsAlt className='text-4xl bg-white p-1 
                 rounded-full hover:scale-110 transition-all
                 duration-300 ease-in-out' />
                 </Link>
                </div>
            </div>
        </div>

        {/* info */}
        <div>
            <h3 className='text-lg font-semibold text-gray-800 
            truncate'>
                {item.title}
           </h3>
           <p className='text-sm text-gray-400'>
            by <span>{item.author}</span>
            </p>
            <p className='font-semibold text-gray-800 mt-3'>
                ${item.price}
            </p>
        </div>

    </div>
  )
}

export default ProductCard