import React from "react";
import CategoryList from "../components/CatgeoryList";
import ProductList from "../components/ProductList";


const Home = () => {
  
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="my-10">
        <CategoryList />
      </div>

      <div className="mb-10">
        <h1 className="text-3xl text-slate-900 font-semibold mb-4">
          Popular Products
        </h1>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
