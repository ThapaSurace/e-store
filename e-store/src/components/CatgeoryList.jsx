import React from 'react'
import { categories } from '../data'
import CategoryCard from './CategoryCard'

const CatgeoryList = () => {
  return (
    <div 
     className='max-w-6xl mx-auto px-4 grid gap-6 grid-cols-1
       sm:grid-cols-2 md:grid-cols-3
     '
    >
      {
        categories.map(cat=>(
          <CategoryCard key={cat.id} cat={cat} />
        ))
      }
    </div>
  )
}

export default CatgeoryList