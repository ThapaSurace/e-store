import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({cat}) => {
  return (
    <Link to={`/products/${cat.title}`}>
      <div className='h-[60vh] rounded-xl shadow-md relative'>
        <img src={cat.img} alt="cat"
         className='w-full h-full object-cover object-center rounded-xl'
        />

        <div className='absolute top-0 left-0 w-full h-full
        bg-black opacity-30 rounded-xl'
        ></div>

        <div className='absolute top-0 left-0 w-full h-full
        flex justify-center items-center'>
          <div className='flex gap-2 flex-col items-center'>
            <span className='text-2xl text-white font-bold'>
              {cat.title}
              </span>
            <button className='bg-teal-500 hover:bg-teal-600'>
              Explore
              </button>
          </div>
        </div>

      </div>
    </Link>
  )
}

export default CategoryCard