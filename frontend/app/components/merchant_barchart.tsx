"use client";
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface MerchantData {
  total_Merchants: number;
  live_Merchants: number;
  cancelled_Merchants: number;
  not_submitted_Merchants: number;
  declined_Merchants: number;
  other_Merchants: number;
}

export default function MerchantBarChart() {
  const [merchantData, setMerchantData] = useState<MerchantData | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((json) => {
        setMerchantData({
          total_Merchants: json.total_Merchants,
          live_Merchants: json.live_Merchants,
          cancelled_Merchants: json.cancelled_Merchants,
          not_submitted_Merchants: json.not_submitted_Merchants,
          declined_Merchants: json.declined_Merchants,
          other_Merchants: json.other_Merchants,
        });
      })
      .catch((err) => console.error("Error fetching merchant data:", err));
  }, []);

  if (!merchantData) {
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

  const data = {
    labels: [
      "Live Merchants",
      "Cancelled Merchants",
      "Not Submitted",
      "Declined",
      "Other",
    ],
    datasets: [
      {
        label: "Merchants",
        data: [
          merchantData.live_Merchants,
          merchantData.cancelled_Merchants,
          merchantData.not_submitted_Merchants,
          merchantData.declined_Merchants,
          merchantData.other_Merchants,
        ],
        backgroundColor: [
          "#FF5722",
          "#009688",
          "#8BC34A",
          "#FF9800",
          "#3F51B5",
        ],
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: "Merchants Overview",
        font: { size: 24, weight: "bold" },
        color: "#333",
      },
    },
    animation: {
      duration: 1200,
      easing: "easeOutQuart",
    },
    scales: {
      y: {
        min: 0,
        max: 560,
        ticks: { stepSize: 100, color: "#555" },
        grid: { color: "#eee" },
      },
      x: {
        ticks: { color: "#555" },
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
        width: "500px",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
}
