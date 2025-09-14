import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  // Dummy data for charts
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const salesData = [65000, 59000, 80000, 81000, 86000, 92000, 105000];
  const topProducts = [
    "Wireless Headphones",
    "Smartphone Case",
    "USB-C Cable",
    "Wireless Mouse",
    "Laptop Stand",
  ];
  const productSales = [125, 98, 76, 65, 54];
  const orderStatuses = ["Completed", "Processing", "Pending", "Cancelled"];
  const orderCounts = [320, 85, 42, 23];

  // Line chart data for sales trend
  const lineChartData = {
    labels: months,
    datasets: [
      {
        label: "Monthly Sales ($)",
        data: salesData,
        borderColor: "rgba(79, 70, 229, 0.8)",
        backgroundColor: "rgba(79, 70, 229, 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // Bar chart data for top products
  const barChartData = {
    labels: topProducts,
    datasets: [
      {
        label: "Units Sold",
        data: productSales,
        backgroundColor: [
          "rgba(79, 70, 229, 0.7)",
          "rgba(99, 102, 241, 0.7)",
          "rgba(129, 140, 248, 0.7)",
          "rgba(165, 180, 252, 0.7)",
          "rgba(199, 210, 254, 0.7)",
        ],
        borderColor: [
          "rgba(79, 70, 229, 1)",
          "rgba(99, 102, 241, 1)",
          "rgba(129, 140, 248, 1)",
          "rgba(165, 180, 252, 1)",
          "rgba(199, 210, 254, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Pie chart data for order status
  const pieChartData = {
    labels: orderStatuses,
    datasets: [
      {
        data: orderCounts,
        backgroundColor: [
          "rgba(16, 185, 129, 0.7)", // green for completed
          "rgba(245, 158, 11, 0.7)", // yellow for processing
          "rgba(59, 130, 246, 0.7)", // blue for pending
          "rgba(239, 68, 68, 0.7)", // red for cancelled
        ],
        borderColor: [
          "rgba(16, 185, 129, 1)",
          "rgba(245, 158, 11, 1)",
          "rgba(59, 130, 246, 1)",
          "rgba(239, 68, 68, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="space-y-6 ">
      {/* Sales Trend Line Chart - Full Width */}
      <div className="bg-white p-6 rounded-xl shadow-md w-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Sales Trend (Last 7 Months)
        </h3>
        <div className="w-full h-80">
          <Line
            data={lineChartData}
            options={{
              ...chartOptions,
              responsive: true,
              maintainAspectRatio: false,
              layout: {
                padding: 0,
              },
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Top Selling Products
          </h3>
          <div className="h-80">
            <Bar data={barChartData} options={chartOptions} />
          </div>
        </div>

        {/* Order Status Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Order Status Distribution
          </h3>
          <div className="h-80">
            <Pie data={pieChartData} options={pieChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
