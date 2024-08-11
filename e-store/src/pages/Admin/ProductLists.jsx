import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../api/apiCall";
import { newRequest } from "../../utils/newRequest";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setProduct } from "../../redux/productRedux";

const ProductsLists = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {data,isLoading,error, refetch} = useProducts()

  const handleDelete = async (id) => {
    try {
      await newRequest.delete(`/product/${id}`)
      toast.success("Product deleted Sucessfully!")
      refetch()
    } catch (error) {
      console.log(error);
    }
  }

  const handleAdd = () => navigate('/dashboard/addproduct')
  const handleEdit = (product) => {
    dispatch(setProduct(product))
    navigate('/dashbaord/editproduct')
  }

  if(isLoading) return <span>loading....</span>
  if(error) return <span>Error fetching data!</span>

  return (
    <div className="flex flex-col max-w-5xl mx-auto mt-10">
      <h1 className="text-center text-2xl font-semibold mb-10">
        Product Lists
      </h1>
      <button onClick={handleAdd} className=" self-end mb-4 bg-teal-700 rounded-md px-4 py-2 text-white">
        Add New Product
      </button>
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Stock</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(product => (
                  <tr key={product._id} className="odd:bg-white even:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                 { product._id }
                </td>
                <td>
                  <img
                    src={product.img}
                    alt=""
                    className="h-10 w-10 rounded-full object-cover object-center"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
                <td className="flex gap-2 items-center">
                  <FiEdit onClick={()=>handleEdit(product)} size={25} className="text-blue-500 hover:text-blue-600 cursor-pointer" />
                  <MdOutlineDeleteOutline onClick={()=>handleDelete(product._id)} size={25} className="text-red-500 hover:text-red-600 cursor-pointer" />
                </td>
              </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsLists;