"use client";
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

interface GPMData {
  marathon_GP_margin_value: number;
  anthony_GP_margin_value: number;
  pokehana_GP_margin_value: number;
}

export default function GPMPieChart() {
  const [GPMData, setGPMData] = useState<GPMData | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((json) => {
        setGPMData({
          marathon_GP_margin_value: json.marathon_GP_margin_value,
          anthony_GP_margin_value: json.anthony_GP_margin_value,
          pokehana_GP_margin_value: json.pokehana_GP_margin_value,
        });
      })
      .catch((err) =>
        console.error("Error fetching Gross Profit Margin data:", err)
      );
  }, []);

  if (!GPMData) {
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
      "Marathon Liquors Gross Profit Margin",
      "Anthony's Pizza Gross Profit Margin",
      "Poke Hana Gross Profit Margin",
    ],
    datasets: [
      {
        label: "Gross Profit Margin",
        data: [
          Number(GPMData.marathon_GP_margin_value.toFixed(2)),
          Number(GPMData.anthony_GP_margin_value.toFixed(2)),
          Number(GPMData.pokehana_GP_margin_value.toFixed(2)),
        ],
        backgroundColor: ["#FF6F61", "#6B5B95", "#88B04B"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "bottom" },
      title: {
        display: true,
        text: "Gross Profit Margin",
        font: { size: 24, weight: "bold" },
        color: "#333",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ": " + tooltipItem.raw + "%";
          },
        },
      },
    },
    animation: {
      duration: 1200,
      easing: "easeOutQuart",
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
      <Pie data={data} options={options} />
    </div>
  );
}
