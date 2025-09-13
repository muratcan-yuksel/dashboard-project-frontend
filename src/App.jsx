import React from "react";
import TotalCustomers from "./components/Dashboard/TotalCustomers";
import TotalProducts from "./components/Dashboard/TotalProducts";
import TotalOrders from "./components/Dashboard/TotalOrders";
import TotalRevenue from "./components/Dashboard/TotalRevenue";
import OrderList from "./components/orderList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-0">
        <div className="p-4 md:p-6 lg:p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Dashboard Overview
          </h1>
        </div>
        {/* boxes */}
        <div className="flex flex-wrap ">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <TotalCustomers />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <TotalProducts />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <TotalOrders />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <TotalRevenue />
          </div>
        </div>
        <div className="p-4 md:p-6 lg:p-8">
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default App;
