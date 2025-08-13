"use client";
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MerchantVolumeLineChart {
  live_merchants_Volumes_name: { [key: string]: string };
  live_merchants_Volumes_month: { [key: string]: number };
}

export default function MerchantVolumeLineChart() {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((json: MerchantVolumeLineChart) => {
        const Merchants_names = Object.values(json.live_merchants_Volumes_name);
        const Merchants_volumes = Object.values(
          json.live_merchants_Volumes_month
        );

        setChartData({
          labels: Merchants_names,
          datasets: [
            {
              label: "Last Month Volume",
              data: Merchants_volumes,
              borderColor: "#FF5722",
              backgroundColor: "rgba(63, 81, 181, 0.2)",
              tension: 0.3,
              fill: true,
              pointBackgroundColor: "#FF5722",
              pointBorderColor: "#fff",
              pointHoverRadius: 6,
            },
          ],
        });
      })
      .catch((err) =>
        console.error("Error fetching merchant volume data:", err)
      );
  }, []);

  if (!chartData) {
    return (
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginTop: "0.5rem",
        }}
      >
        Loading chart...
      </p>
    );
  }

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: "Last Month Volume(Top 10 Live Merchants)",
        font: { size: 20, weight: "bold" },
        color: "#333",
      },
    },
    animation: {
      duration: 1200,
      easing: "easeOutQuart",
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#555" },
        grid: { color: "#eee" },
      },
      x: {
        ticks: { color: "#555", maxRotation: 45, minRotation: 45 },
        grid: { display: false },
      },
    },
  };

  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "0.75rem",
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        border: "1px solid #e5e7eb",
        height: "500px",
        width: "100%",
        overflowX: "auto",
      }}
    >
      <Line data={chartData} options={options} />
    </div>
  );
}
