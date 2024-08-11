import React from "react";
import { useOrders } from "../../api/apiCall";

const Orderlist = () => {
  const { data, isLoading, error } = useOrders()

  if (isLoading) return <span>loading....</span>
  if (error) return <span>Error fetching data!</span>
  return (
    <div className="flex flex-col max-w-5xl mx-auto mt-10">
      <h1 className="text-center text-2xl font-semibold mb-4 text-slate-900">Order Lists</h1>
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Payment ID</th>
                <th>User ID</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(order => (
                  <tr key={order._id} className="odd:bg-white even:bg-gray-100">
                    <td>{order._id}</td>
                    <td>{order.payment_intent}</td>
                    <td>{order.userId}</td>
                    <td>${order.amount}</td>
                    <td>success</td>
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

export default Orderlist;