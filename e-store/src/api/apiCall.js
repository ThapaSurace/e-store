import { useQuery } from "@tanstack/react-query"
import { newRequest } from "../utils/newRequest"

//getting all products
export const useProducts = (genre,sort) => {
  return(
    useQuery({
      queryKey: ['products',genre,sort],
      queryFn: async () => {
        try {
          const res = await 
          newRequest.get(genre ? `/products?genre=${genre}&sort=${sort}` : '/products')
          return res.data
        } catch (error) {
          console.log(error);
        }
      }
    })
  )
}



//get single product
export const useSingleProduct = (id) => {
  return(
    useQuery({
      queryKey:['product',id],
      queryFn: async () => {
        try {
          const res = await newRequest.get(`/product/${id}`)
          return res.data
        } catch (error) {
          console.log(error);
        }
      }
    })
  )
}


//getting all users
export const useUsers = () => {
  return(
    useQuery({
      queryKey:['users'],
      queryFn: async () => {
        try {
          const res = await newRequest.get(`/users`)
          return res.data
        } catch (error) {
          console.log(error);
        }
      }
    })
  )
}


//getting all orders

export const useOrders = () => {
  return(
    useQuery({
      queryKey:['orders'],
      queryFn: async () => {
        try {
          const res = await newRequest.get(`/orders`)
          return res.data
        } catch (error) {
          console.log(error);
        }
      }
    })
  )
}