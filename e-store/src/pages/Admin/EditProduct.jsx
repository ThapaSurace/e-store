import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import upload from '../../utils/upload'
import { newRequest } from '../../utils/newRequest'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const EditProduct = () => {
  const navigate = useNavigate()
  const {product} = useSelector(state => state.product)

  const {register, handleSubmit, formState:{errors,isSubmitting}} = 
  useForm({
    defaultValues: {
      title: product?.title || '',
      author: product?.author || '',
      synopsis: product?.synopsis || '',
      genre: product?.genre.join(',') || '',
      language: product?.language || '',
      price: product?.price || '',
      stock: product?.stock || ''
    }
  })

  const onSubmit = async (data) => {
    let img = product.img
    if(data.img && data.img.length > 0) {
      img = await upload(data.img[0])
    }

    const formData = {
      ...data,
      img: img,
      genre: data.genre.split(',')
    }

   try {
     await newRequest.put(`/product/${product._id}`, formData)
     toast.success("Product updated Successfully!")
     navigate('/dashboard/productlist')
   } catch (error) {
    console.log(error);
   }
  }



  return (
   <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-slate-900 font-semibold mb-4 text-2xl text-center">
        Update Product
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div>
          <label htmlFor="file">Image</label>
          <input type="file" id="file" name="file" {
            ...register("img")
          } />
       
        </div>
        <div className="flex gap-4 w-full">
          <div className="flex-1">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" {
            ...register("title",{
              required: "Required"
            })
          }  />
          {errors.title && <span className='text-red-500 text-sm'>
            {errors.title.message}
            </span>}
          </div>
          <div className="flex-1">
            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="author" {
            ...register("author",{
              required: "Required"
            })} />
             {errors.author && <span className='text-red-500 text-sm'>
            {errors.author.message}
            </span>}
          </div>
        </div>
        <div>
          <label htmlFor="synopsis">Synopsis</label>
          <textarea rows="5" type="text" id="synopsis" name="synopsis" {
            ...register("synopsis",{
              required: "Required"
            })} />
             {errors.synopsis && <span className='text-red-500 text-sm'>
            {errors.synopsis.message}
            </span>}
        </div>
        <div className="flex w-full gap-4">
          <div className="flex-1">
            <label htmlFor="genre">Genre</label>
            <input type="text" id="genre" name="genre" {
            ...register("genre",{
              required: "Required"
            })}  />
             {errors.genre && <span className='text-red-500 text-sm'>
            {errors.genre.message}
            </span>}
          </div>
          <div className="flex-1">
            <label htmlFor="language">Language</label>
            <input type="text" id="language" name="language" {
            ...register("language",{
              required: "Required"
            })} />
             {errors.language && <span className='text-red-500 text-sm'>
            {errors.language.message}
            </span>}
          </div>
        </div>
        <div className="flex w-full gap-4">
          <div className="flex-1">
            <label htmlFor="price">Price</label>
            <input type="text" id="price" name="price" {
            ...register("price",{
              required: "Required"
            })} />
             {errors.price && <span className='text-red-500 text-sm'>
            {errors.price.message}
            </span>}
          </div>
          <div className="flex-1">
            <label htmlFor="stock">Stock</label>
            <input type="text" id="stock" name="stock" {
            ...register("stock",{
              required: "Required"
            })} />
             {errors.stock && <span className='text-red-500 text-sm'>
            {errors.stock.message}
            </span>}
          </div>
        </div>
        <button
         disabled={isSubmitting}
          type="submit"
          className="bg-teal-600 mt-2 w-full hover:bg-teal-700 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "processing..." : "Submit"}
        </button>
      </form>
    </div>
  )
}

export default EditProduct