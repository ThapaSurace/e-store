import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {label:"Users", path:"/dashboard/userlist"},
  {label:"Products", path:"/dashboard/productlist"},
  {label:"Orders", path:"/dashboard/orderlist"},
]

const AdminNavbar = () => {
  return (
    <div className="border-b shadow-sm py-4">
       <div className="container flex justify-between items-center">
          <div className="text-2xl font-bold">Admin Dashboard</div>

          {/* navlinks */}
          <ul className="flex text-xl gap-6 text-slate-800 font-medium">
            {
              navLinks.map(link=>(
                <Link key={link.label} to={link.path}>
                  <li>{link.label}</li>
                </Link>
              ))
            }
          </ul>
          

          <div>logout</div>
       </div>
    </div>
  );
};

export default AdminNavbar;
