import React, { useState, useEffect } from "react";
import axios from "axios";
import DummyData from "../../../DummyData.json";

const TotalProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Try to fetch from API first
        const response = await axios.get("http://localhost:4000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.warn("API request failed, using dummy data", error);
        // Fall back to dummy data
        setProducts(DummyData.products || []);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-64 h-40 bg-white border rounded-xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Total Products
        </h2>
        <div className="relative w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-xl font-bold">
              {products.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalProducts;
