import React, { useState, useEffect } from "react";
import axios from "axios";
import DummyData from "../../../DummyData.json";

const TotalCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        // Try to fetch from API first
        const response = await axios.get("http://localhost:4000/api/customers");
        setCustomers(response.data);
      } catch (error) {
        console.warn("API request failed, using dummy data", error);
        // Fall back to dummy data
        setCustomers(DummyData.customers || []);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (isLoading) {
    return <div>Loading customers...</div>;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-64 h-40 bg-white border rounded-xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Total Customers
        </h2>
        <div className="relative w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-white text-xl font-bold">
              {customers.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCustomers;
