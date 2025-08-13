(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/merchant_barchart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>MerchantBarChart
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
function MerchantBarChart() {
    _s();
    const [merchantData, setMerchantData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MerchantBarChart.useEffect": ()=>{
            fetch("http://localhost:8000/data") // <-- your FastAPI endpoint
            .then({
                "MerchantBarChart.useEffect": (res)=>res.json()
            }["MerchantBarChart.useEffect"]).then({
                "MerchantBarChart.useEffect": (json)=>{
                    setMerchantData({
                        total_Merchants: json.total_Merchants,
                        live_Merchants: json.live_Merchants,
                        cancelled_Merchants: json.cancelled_Merchants,
                        not_submitted_Merchants: json.not_submitted_Merchants,
                        declined_Merchants: json.declined_Merchants,
                        other_Merchants: json.other_Merchants
                    });
                }
            }["MerchantBarChart.useEffect"]).catch({
                "MerchantBarChart.useEffect": (err)=>console.error("Error fetching merchant data:", err)
            }["MerchantBarChart.useEffect"]);
        }
    }["MerchantBarChart.useEffect"], []);
    if (!merchantData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginTop: "0.5rem"
            },
            children: "Loading chart..."
        }, void 0, false, {
            fileName: "[project]/app/components/merchant_barchart.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    const data = {
        labels: [
            "Live Merchants",
            "Cancelled Merchants",
            "Not Submitted",
            "Declined",
            "Other"
        ],
        datasets: [
            {
                label: "Merchants",
                data: [
                    merchantData.live_Merchants,
                    merchantData.cancelled_Merchants,
                    merchantData.not_submitted_Merchants,
                    merchantData.declined_Merchants,
                    merchantData.other_Merchants
                ],
                backgroundColor: [
                    "#FF5722",
                    "#009688",
                    "#8BC34A",
                    "#FF9800",
                    "#3F51B5"
                ],
                borderRadius: 8,
                borderSkipped: false
            }
        ]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true
            },
            title: {
                display: true,
                text: "Merchants Overview",
                font: {
                    size: 24,
                    weight: "bold"
                },
                color: "#333"
            }
        },
        animation: {
            duration: 1200,
            easing: "easeOutQuart"
        },
        scales: {
            y: {
                min: 0,
                max: 560,
                ticks: {
                    stepSize: 100,
                    color: "#555"
                },
                grid: {
                    color: "#eee"
                }
            },
            x: {
                ticks: {
                    color: "#555"
                },
                grid: {
                    display: false
                }
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "1rem",
            borderRadius: "0.75rem",
            backgroundColor: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            border: "1px solid #e5e7eb",
            height: "500px",
            width: "500px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            data: data,
            options: options
        }, void 0, false, {
            fileName: "[project]/app/components/merchant_barchart.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/merchant_barchart.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_s(MerchantBarChart, "Z7SISuUxCQeMul8S308JRGs6Nac=");
_c = MerchantBarChart;
var _c;
__turbopack_context__.k.register(_c, "MerchantBarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/customer_piechart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>CustomerPieChart
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
function CustomerPieChart() {
    _s();
    const [CustomerData, setCustomerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerPieChart.useEffect": ()=>{
            fetch("http://localhost:8000/data").then({
                "CustomerPieChart.useEffect": (res)=>res.json()
            }["CustomerPieChart.useEffect"]).then({
                "CustomerPieChart.useEffect": (json)=>{
                    setCustomerData({
                        phone_email_customer: json.phone_email_customer,
                        name_phone_email_customer: json.name_phone_email_customer,
                        marketting_customer_yes: json.marketting_customer_yes,
                        marketting_customer_no: json.marketting_customer_no,
                        marketting_customer_yes_phone: json.marketting_customer_yes_phone,
                        marketting_customer_yes_phone_email: json.marketting_customer_yes_phone_email
                    });
                }
            }["CustomerPieChart.useEffect"]).catch({
                "CustomerPieChart.useEffect": (err)=>console.error("Error fetching customer data:", err)
            }["CustomerPieChart.useEffect"]);
        }
    }["CustomerPieChart.useEffect"], []);
    if (!CustomerData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginTop: "0.5rem"
            },
            children: "Loading chart..."
        }, void 0, false, {
            fileName: "[project]/app/components/customer_piechart.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this);
    }
    const data = {
        labels: [
            "Customers with Phone & Email",
            "Customers with Name, Phone & Email",
            "Marketing Customers (Yes)",
            "Marketing Customers (No)",
            "Marketing Customers (Yes) - Phone",
            "Marketing Customers (Yes) - Phone & Email"
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
                    CustomerData.marketting_customer_yes_phone_email
                ],
                backgroundColor: [
                    "#9C27B0",
                    "#4CAF50",
                    "#E91E63",
                    "#00BCD4",
                    "#CDDC39",
                    "#795548"
                ],
                borderWidth: 1
            }
        ]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: "bottom"
            },
            title: {
                display: true,
                text: "Customers Overview",
                font: {
                    size: 24,
                    weight: "bold"
                },
                color: "#333"
            }
        },
        animation: {
            duration: 1200,
            easing: "easeOutQuart"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "1rem",
            borderRadius: "0.75rem",
            backgroundColor: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            border: "1px solid #e5e7eb",
            height: "500px",
            width: "500px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
            data: data,
            options: options
        }, void 0, false, {
            fileName: "[project]/app/components/customer_piechart.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/customer_piechart.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(CustomerPieChart, "BQT0XCOwDn/JA9/gKQ+4sO8jreE=");
_c = CustomerPieChart;
var _c;
__turbopack_context__.k.register(_c, "CustomerPieChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/statbox.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>StatBox
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
"use client";
;
;
function StatBox(param) {
    let { nameStat, numberValue, percentageChange, trendText, visitorsText, updownsign, updownsigncolor, updownsigncolortext } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "11.2rem",
            padding: "1rem",
            borderRadius: "0.75rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
            border: "1px solid #e5e7eb"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#4b5563",
                            fontSize: "0.875rem"
                        },
                        children: nameStat
                    }, void 0, false, {
                        fileName: "[project]/app/components/statbox.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            fontSize: "0.875rem",
                            color: updownsigncolortext,
                            backgroundColor: updownsigncolor,
                            padding: "0.125rem 0.5rem",
                            marginLeft: "10px",
                            borderRadius: "0.5rem"
                        },
                        children: [
                            updownsign,
                            " ",
                            percentageChange
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/statbox.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/statbox.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginTop: "0.5rem"
                },
                children: numberValue
            }, void 0, false, {
                fileName: "[project]/app/components/statbox.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    marginTop: "0.25rem",
                    color: "#374151",
                    fontSize: "0.875rem",
                    fontWeight: 500
                },
                children: [
                    trendText,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                        size: 14,
                        style: {
                            marginLeft: "0.25rem"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/statbox.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/statbox.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "#6b7280",
                    fontSize: "0.875rem",
                    marginTop: "0.25rem"
                },
                children: visitorsText
            }, void 0, false, {
                fileName: "[project]/app/components/statbox.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/statbox.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = StatBox;
var _c;
__turbopack_context__.k.register(_c, "StatBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/top_statbox.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>TopStatBox
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$statbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/statbox.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TopStatBox() {
    _s();
    const [total_Merchants, settotal_Merchants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [total_Customers, settotal_Customers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TopStatBox.useEffect": ()=>{
            fetch("http://localhost:8000/data").then({
                "TopStatBox.useEffect": (res)=>res.json()
            }["TopStatBox.useEffect"]).then({
                "TopStatBox.useEffect": (json)=>{
                    settotal_Merchants(json.total_Merchants);
                    settotal_Customers({
                        total_customers: json.total_customers,
                        name_Customers: json.name_Customers,
                        phonenumber_Customers: json.phonenumber_Customers,
                        email_Customers: json.email_Customers,
                        phone_email_customer: json.phone_email_customer
                    });
                }
            }["TopStatBox.useEffect"]).catch({
                "TopStatBox.useEffect": (err)=>console.error("Error fetching merchant data:", err)
            }["TopStatBox.useEffect"]);
        }
    }["TopStatBox.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    paddingLeft: "30px",
                    paddingRight: "30px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$statbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    nameStat: "Total Merchants",
                    numberValue: total_Merchants.toString(),
                    percentageChange: "",
                    trendText: "Steady Increase",
                    visitorsText: "",
                    updownsign: "↑",
                    updownsigncolor: "#a4fcf2",
                    updownsigncolortext: "#16a34a"
                }, void 0, false, {
                    fileName: "[project]/app/components/top_statbox.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/top_statbox.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    paddingLeft: "30px",
                    paddingRight: "30px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$statbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    nameStat: "Total Customers",
                    numberValue: total_Customers ? total_Customers.total_customers.toString() : "0",
                    percentageChange: "",
                    trendText: "Registered",
                    visitorsText: "",
                    updownsign: "↑",
                    updownsigncolor: "#a4fcf2",
                    updownsigncolortext: "#16a34a"
                }, void 0, false, {
                    fileName: "[project]/app/components/top_statbox.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/top_statbox.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    paddingLeft: "30px",
                    paddingRight: "30px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$statbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    nameStat: "Total Customers",
                    numberValue: total_Customers ? total_Customers.name_Customers.toString() : "0",
                    percentageChange: "",
                    trendText: "With their Names",
                    visitorsText: "",
                    updownsign: "↑",
                    updownsigncolor: "#a4fcf2",
                    updownsigncolortext: "#16a34a"
                }, void 0, false, {
                    fileName: "[project]/app/components/top_statbox.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/top_statbox.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    paddingLeft: "30px",
                    paddingRight: "30px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$statbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    nameStat: "Total Customers",
                    numberValue: total_Customers ? total_Customers.email_Customers.toString() : "0",
                    percentageChange: "",
                    trendText: "With their Email",
                    visitorsText: "",
                    updownsign: "↓",
                    updownsigncolor: "#fca4a4",
                    updownsigncolortext: "#a31616"
                }, void 0, false, {
                    fileName: "[project]/app/components/top_statbox.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/top_statbox.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    paddingLeft: "30px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$statbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    nameStat: "Total Customers",
                    numberValue: total_Customers ? total_Customers.phonenumber_Customers.toString() : "0",
                    percentageChange: "",
                    trendText: "With their Phone",
                    visitorsText: "",
                    updownsign: "↓",
                    updownsigncolor: "#fca4a4",
                    updownsigncolortext: "#a31616"
                }, void 0, false, {
                    fileName: "[project]/app/components/top_statbox.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/top_statbox.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(TopStatBox, "+g42yw1z/bgZmCIlgeVQJw2LzFk=");
_c = TopStatBox;
var _c;
__turbopack_context__.k.register(_c, "TopStatBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_components_213c3d14._.js.map