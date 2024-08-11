import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(redirectTimer);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="flex flex-col gap-4 items-center">
        
        <span className="text-green-700 text-3xl font-bold">Success</span>
        <span className="text-slate-800 text-lg tracking-wider">
          Redirecting to order page in {count} seconds...
        </span>
      </div>
    </div>
  );
};

export default Success;