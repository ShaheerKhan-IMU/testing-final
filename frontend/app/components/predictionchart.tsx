"use client";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function PredictedSalesChart() {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      tension: number;
    }[];
  } | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/data")
      .then((res) => res.json())
      .then((data) => {
        const labels = [
          ...data.historical.dates,
          ...data.prediction_next_2_months.dates,
          ...data.prediction_same_period_next_year.dates,
        ];

        const salesData = [
          ...data.historical.sales,
          ...data.prediction_next_2_months.sales,
          ...data.prediction_same_period_next_year.sales,
        ];

        setChartData({
          labels,
          datasets: [
            {
              label: "Sales Prediction",
              data: salesData,
              borderColor: "rgba(75,192,192,1)",
              backgroundColor: "rgba(75,192,192,0.2)",
              tension: 0.3,
            },
          ],
        });
      });
  }, []);

  if (!chartData) return <p>Loading chart...</p>;

  return (
    <div style={{ width: "90%", margin: "auto", padding: "20px" }}>
      <Line data={chartData} />
    </div>
  );
}
