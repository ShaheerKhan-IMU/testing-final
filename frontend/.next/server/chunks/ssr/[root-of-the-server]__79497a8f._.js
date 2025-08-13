module.exports = {

"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/components/barchart.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ChartOptions,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );
// interface MerchantData {
//   total_Merchants: number;
//   live_Merchants: number;
//   cancelled_Merchants: number;
//   not_submitted_Merchants: number;
//   declined_Merchants: number;
//   other_Merchants: number;
// }
// export default function MerchantBarChart() {
//   const [merchantData, setMerchantData] = useState<MerchantData | null>(null);
//   useEffect(() => {
//     fetch("http://localhost:8000/data") // <-- your FastAPI endpoint
//       .then((res) => res.json())
//       .then((json) => {
//         setMerchantData({
//           total_Merchants: json.total_Merchants,
//           live_Merchants: json.live_Merchants,
//           cancelled_Merchants: json.cancelled_Merchants,
//           not_submitted_Merchants: json.not_submitted_Merchants,
//           declined_Merchants: json.declined_Merchants,
//           other_Merchants: json.other_Merchants,
//         });
//       })
//       .catch((err) => console.error("Error fetching merchant data:", err));
//   }, []);
//   if (!merchantData) {
//     return <p>Loading chart...</p>;
//   }
//   const data = {
//     labels: [
//       "Total Merchants",
//       "Live Merchants",
//       "Cancelled Merchants",
//       "Not Submitted",
//       "Declined",
//       "Other",
//     ],
//     datasets: [
//       {
//         label: "Merchants",
//         data: [
//           merchantData.total_Merchants,
//           merchantData.live_Merchants,
//           merchantData.cancelled_Merchants,
//           merchantData.not_submitted_Merchants,
//           merchantData.declined_Merchants,
//           merchantData.other_Merchants,
//         ],
//         backgroundColor: [
//           "#FF5722", // Orange
//           "#009688", // Teal
//           "#3F51B5", // Indigo
//           "#FFC107", // Amber
//           "#FF9800", // Deep Orange
//           "#8BC34A", // Light Green
//         ],
//         borderRadius: 8,
//         borderSkipped: false,
//       },
//     ],
//   };
//   const options: ChartOptions<"bar"> = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       title: {
//         display: true,
//         text: "Merchants Overview",
//         font: { size: 18, weight: "bold" },
//         color: "#333",
//       },
//     },
//     animation: {
//       duration: 1200,
//       easing: "easeOutQuart",
//     },
//     scales: {
//       y: {
//         min: 0,
//         max: 800,
//         ticks: { stepSize: 100, color: "#555" },
//         grid: { color: "#eee" },
//       },
//       x: {
//         ticks: { color: "#555" },
//         grid: { display: false },
//       },
//     },
//   };
//   return (
//     <div
//       style={{
//         padding: "20px",
//         backgroundColor: "#fff",
//         borderRadius: "12px",
//         boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//         border: "1px solid #eee",
//       }}
//     >
//       <Bar data={data} options={options} />
//       <p style={{ marginTop: "10px", color: "#666", fontSize: "14px" }}>
//         Showing merchant stats from backend
//       </p>
//     </div>
//   );
// }
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useEffect, useState } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ChartOptions,
// } from "chart.js";
// import { Line } from "react-chartjs-2";
// import { ChartBarComponent } from "@/components/bar-chart";
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );
// export default function Home() {
//   const [total_Merchants, settotal_Merchants] = useState<number>(0);
//   useEffect(() => {
//     fetch("http://localhost:8000/sales")
//       .then((res) => res.json())
//       .then((json) => {
//         settotal_Merchants(json.total_Merchants);
//       })
//       .catch((err) => console.error("Error fetching sales data:", err));
//   }, []);
//   // const chartData = {
//   //   labels: data.map((item) => item.date),
//   //   datasets: [
//   //     {
//   //       label: "Sales",
//   //       data: data.map((item) => item.sales),
//   //       borderColor: "rgba(54, 162, 235, 1)",
//   //       backgroundColor: "rgba(54, 162, 235, 0.2)",
//   //       fill: true,
//   //       tension: 0.4,
//   //       pointRadius: 5,
//   //       pointHoverRadius: 7,
//   //     },
//   //   ],
//   // };
//   const chartOptions: ChartOptions<"line"> = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top" as const,
//       },
//       title: {
//         display: true,
//         text: "📈 Sales Over Time",
//         font: {
//           size: 18,
//         },
//       },
//     },
//     animation: {
//       duration: 1000,
//       easing: "easeInOutQuad",
//     },
//   };
//   return (
//     <main style={{ width: "600px", margin: "40px auto" }}>
//       <h2 style={{ textAlign: "center" }}>Cleaned Sales Data</h2>
//       <h1 style={{ textAlign: "center" }}>Total Records: {total_Merchants}</h1>
//       {/* {data.length > 0 ? (
//         <Line data={chartData} options={chartOptions} />
//       ) : (
//         <p style={{ textAlign: "center" }}>Loading chart...</p>
//       )} */}
//     </main>
//   );
// }
__turbopack_context__.s({
    "default": ()=>Page
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$barchart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/barchart.tsx [app-rsc] (ecmascript)");
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: "800px",
            margin: "0 auto"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$barchart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__79497a8f._.js.map