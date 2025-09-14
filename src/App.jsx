import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import TotalRevenue from "./components/Dashboard/TotalRevenue";
import TotalCustomers from "./components/Dashboard/TotalCustomers";
import TotalProducts from "./components/Dashboard/TotalProducts";
import TotalOrders from "./components/Dashboard/TotalOrders";
import OrderList from "./components/SideBar/orderList";
import CustomerList from "./components/SideBar/CustomerList";
import ProductList from "./components/SideBar/ProductList";
import Charts from "./components/Dashboard/Charts";

// Helper function to get page title from path
const getPageTitle = (pathname) => {
  switch (pathname) {
    case "/":
      return "Dashboard Overview";
    case "/customers":
      return "Customers";
    case "/products":
      return "Products";
    case "/orders":
      return "Orders";
    case "/reports":
      return "Analytics Reports";
    default:
      return "Dashboard";
  }
};

function App() {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SideBar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar title={pageTitle} />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route
              path="/"
              element={
                <div className="p-4 md:p-8 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <TotalRevenue />
                    <TotalCustomers />
                    <TotalProducts />
                    <TotalOrders />
                  </div>
                  <div className="space-y-8">
                    <OrderList />
                    <Charts />
                  </div>
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
                  <OrderList />
                </div>
              }
            />
            <Route
              path="/reports"
              element={
                <div className="p-4 md:p-8">
                  <Charts />
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
