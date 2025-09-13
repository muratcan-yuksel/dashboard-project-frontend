import React from "react";
import TotalCustomers from "./components/Dashboard/TotalCustomers";
import TotalProducts from "./components/Dashboard/TotalProducts";
import TotalOrders from "./components/Dashboard/TotalOrders";
import TotalRevenue from "./components/Dashboard/TotalRevenue";
import OrderList from "./components/orderList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Dashboard Overview
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <div className="w-full">
          <TotalCustomers />
        </div>
        <div className="w-full">
          <TotalProducts />
        </div>
        <div className="w-full">
          <TotalOrders />
        </div>
        <div className="w-full">
          <TotalRevenue />
        </div>
      </div>
      <OrderList />
    </div>
  );
};

export default App;
