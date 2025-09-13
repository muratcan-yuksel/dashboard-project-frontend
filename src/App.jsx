import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import TotalRevenue from "./components/Dashboard/TotalRevenue";
import TotalCustomers from "./components/Dashboard/TotalCustomers";
import TotalProducts from "./components/Dashboard/TotalProducts";
import TotalOrders from "./components/Dashboard/TotalOrders";
import OrderList from "./components/orderList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <SideBar />
      <div className="md:ml-64">
        <Routes>
          <Route
            path="/"
            element={
              <div className="p-4 md:p-8">
                <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <TotalRevenue />
                  <TotalCustomers />
                  <TotalProducts />
                  <TotalOrders />
                </div>
                <OrderList />
              </div>
            }
          />
          <Route
            path="/customers"
            element={
              <div className="p-4 md:p-8">
                <h1 className="text-2xl font-bold mb-6">Customers</h1>
                {/* Add customers component here */}
              </div>
            }
          />
          <Route
            path="/products"
            element={
              <div className="p-4 md:p-8">
                <h1 className="text-2xl font-bold mb-6">Products</h1>
                {/* Add products component here */}
              </div>
            }
          />
          <Route
            path="/orders"
            element={
              <div className="p-4 md:p-8">
                <h1 className="text-2xl font-bold mb-6">Orders</h1>
                <OrderList />
              </div>
            }
          />
          <Route
            path="/reports"
            element={
              <div className="p-4 md:p-8">
                <h1 className="text-2xl font-bold mb-6">Reports</h1>
                {/* Add reports component here */}
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
