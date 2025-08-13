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

interface CustomerData {
  phone_email_customer: number;
  name_phone_email_customer: number;
  marketting_customer_yes: number;
  marketting_customer_no: number;
  marketting_customer_yes_phone: number;
  marketting_customer_yes_phone_email: number;
}

export default function CustomerPieChart() {
  const [CustomerData, setCustomerData] = useState<CustomerData | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((json) => {
        setCustomerData({
          phone_email_customer: json.phone_email_customer,
          name_phone_email_customer: json.name_phone_email_customer,
          marketting_customer_yes: json.marketting_customer_yes,
          marketting_customer_no: json.marketting_customer_no,
          marketting_customer_yes_phone: json.marketting_customer_yes_phone,
          marketting_customer_yes_phone_email:
            json.marketting_customer_yes_phone_email,
        });
      })
      .catch((err) => console.error("Error fetching customer data:", err));
  }, []);

  if (!CustomerData) {
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
      "Customers with Phone & Email",
      "Customers with Name, Phone & Email",
      "Marketing Customers (Yes)",
      "Marketing Customers (No)",
      "Marketing Customers (Yes) - Phone",
      "Marketing Customers (Yes) - Phone & Email",
    ],
    datasets: [
      {
        label: "Customers",
        data: [
          CustomerData.phone_email_customer,
          CustomerData.name_phone_email_customer,
          CustomerData.marketting_customer_yes,
          CustomerData.marketting_customer_no,
          CustomerData.marketting_customer_yes_phone,
          CustomerData.marketting_customer_yes_phone_email,
        ],
        backgroundColor: [
          "#9C27B0",
          "#4CAF50",
          "#E91E63",
          "#00BCD4",
          "#CDDC39",
          "#795548",
        ],
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
        text: "Customers Overview",
        font: { size: 24, weight: "bold" },
        color: "#333",
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
