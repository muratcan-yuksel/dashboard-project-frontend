import React, { useState, useEffect } from "react";
import axios from "axios";
import DummyData from "../../../DummyData.json";

const TotalRevenue = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/orders");
        const total = response.data.reduce(
          (sum, order) => sum + (order.total || 0),
          0
        );
        setTotalRevenue(total);
      } catch (apiError) {
        console.warn("API request failed, using dummy data", apiError);
        // Calculate from dummy data
        const dummyTotal = DummyData.orders.reduce(
          (sum, order) => sum + (order.total || 0),
          0
        );
        setTotalRevenue(dummyTotal);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRevenue();
  }, []);

  if (isLoading) {
    return <div>Loading revenue...</div>;
  }

  // Format the number with 2 decimal places and add $ sign
  const formattedRevenue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(totalRevenue);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-64 h-40 bg-white border rounded-xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Total Revenue
        </h2>
        <div className="relative w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
            <span className="text-white text-lg font-bold">
              {formattedRevenue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
