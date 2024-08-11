import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import { useParams } from 'react-router-dom';

const Products = () => {
const {genre} = useParams()
const [sort,setSort] = useState('')
const [filter,setFilter] = useState('')

  return (
    <div className='container my-10'>
      <h1 className='text-3xl font-bold text-slate-900'>{genre}</h1>
      {/* filter */}
      <div className='flex justify-between items-center py-4 border-b'>
        {/* left */}
        <div>
          <label className='text-xl font-semibold mb-1' htmlFor="language">Filter Language</label>
          <select name="language" id="language" onChange={e=>setFilter(e.target.value)}>
            <option value="">Select language</option>
            <option value="Nepali">Nepali</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        {/* right */}
        <div>
          <label className='text-xl font-semibold mb-1' htmlFor="price">Sort Product</label>
          <select name="price" id="price" onChange={e=>setSort(e.target.value)}>
            <option value="">Sort Price</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      {/* productlist */}
      <div className='my-4'>
        <ProductList genre={genre} sort={sort} filter={filter} />
      </div>
    </div>
  );
};

export default Products;
