import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import TotalRevenue from "./components/Dashboard/TotalRevenue";
import TotalCustomers from "./components/Dashboard/TotalCustomers";
import TotalProducts from "./components/Dashboard/TotalProducts";
import TotalOrders from "./components/Dashboard/TotalOrders";
import OrderList from "./components/SideBar/orderList";
import CustomerList from "./components/SideBar/CustomerList";
import ProductList from "./components/SideBar/ProductList";
import Charts from "./components/Dashboard/Charts";

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
                <Charts />
              </div>
            }
          />
          <Route
            path="/customers"
            element={
              <div className="p-4 md:p-8">
                <CustomerList />
              </div>
            }
          />
          <Route
            path="/products"
            element={
              <div className="p-4 md:p-8">
                <ProductList />
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
