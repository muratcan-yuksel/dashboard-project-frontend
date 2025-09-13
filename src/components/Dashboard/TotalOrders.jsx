import React, { useState, useEffect } from "react";
import axios from "axios";
import DummyData from "../../../DummyData.json";

const TotalOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/orders");
        setOrders(response.data);
      } catch (apiError) {
        console.warn("API request failed, using dummy data", apiError);
        setOrders(DummyData.orders || []);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (isLoading) {
    return <div>Loading orders...</div>;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-64 h-40 bg-white border rounded-xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Total Orders
        </h2>
        <div className="relative w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
            <span className="text-white text-xl font-bold">
              {orders.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalOrders;
