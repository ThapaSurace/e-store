import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductSinglePage from "./pages/ProductSinglePage";
import Cart from "./pages/Cart";
import ProductsLists from "./pages/Admin/ProductLists";
import AdminLayout from "./utils/AdminLayout";
import UserLayout from "./utils/UserLayout";
import UserList from "./pages/Admin/UserList";
import Orderlist from "./pages/Admin/OrderList";
import AddProduct from "./pages/Admin/AddProduct";
import EditProduct from "./pages/Admin/EditProduct";
import PrivateRoute from "./utils/PrivateRoute";
import AdminRoute from "./utils/AdminRoute";
import { Toaster } from "react-hot-toast";
import ShippingForm from "./pages/ShippingForm";
import Pay from "./pages/Pay";
import Success from "./pages/Success";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:genre" element={<Products />} />
          <Route path="/product/:id" element={<ProductSinglePage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/shipping" element={<ShippingForm />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/success" element={<Success />} />
          </Route>

        </Route>

        <Route element={<AdminLayout />}>
          <Route element={<AdminRoute />}>
            <Route path="/dashboard/productlist" element={<ProductsLists />} />
            <Route path="/dashboard/userlist" element={<UserList />} />
            <Route path="/dashboard/orderlist" element={<Orderlist />} />
            <Route path="/dashboard/addproduct" element={<AddProduct />} />
            <Route path="/dashbaord/editproduct" element={<EditProduct />} />
          </Route>
        </Route>
      </Routes>

    </>
  );
};

export default App;
