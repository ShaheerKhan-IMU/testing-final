"use client";
import { useEffect, useState } from "react";
import StatBox from "./statbox";

interface salesdata {
  marathon_gross_sale_value: number;
  marathon_net_sale_value: number;
  anthony_gross_sale_value: number;
  anthony_net_sale_value: number;
  pokehana_gross_sale_value: number;
  pokehana_net_sale_value: number;
  SS_gross_revenue: string;
  SS_net_revenue: string;
  SS_gross_revenue_daily: string;
  SS_gross_revenue_weekly: string;
  SS_gross_revenue_monthly: string;
}
export default function RevenueStatBox() {
  const [SalesData, setSalesData] = useState<salesdata | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((json) => {
        setSalesData({
          marathon_gross_sale_value: json.marathon_gross_sale_value,
          marathon_net_sale_value: json.marathon_net_sale_value,
          anthony_gross_sale_value: json.anthony_gross_sale_value,
          anthony_net_sale_value: json.anthony_net_sale_value,
          pokehana_gross_sale_value: json.pokehana_gross_sale_value,
          pokehana_net_sale_value: json.pokehana_net_sale_value,
          SS_gross_revenue: json.SS_gross_revenue,
          SS_net_revenue: json.SS_net_revenue,
          SS_gross_revenue_daily: json.SS_gross_revenue_daily,
          SS_gross_revenue_weekly: json.SS_gross_revenue_weekly,
          SS_gross_revenue_monthly: json.SS_gross_revenue_monthly,
        });
      })
      .catch((err) => console.error("Error fetching merchant data:", err));
  }, []);
  return (
    <>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          paddingTop: "30px",
          paddingLeft: "30px",
          letterSpacing: "1px",
        }}
      >
        Merchants Gross Sales
      </h1>
      <div
        style={{ display: "flex", paddingTop: "30px", paddingBottom: "30px" }}
      >
        <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <StatBox
            nameStat="Marathon Liquor"
            numberValue={`${
              SalesData
                ? "$" + SalesData.marathon_gross_sale_value.toLocaleString()
                : "$0"
            }`}
            percentageChange=""
            trendText="Gross Sale"
            visitorsText=""
            updownsign="$"
            updownsigncolor="#fcd6a4"
            updownsigncolortext="#a35816"
          />
        </div>

        <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <StatBox
            nameStat="Anthony's Pizza"
            numberValue={`${
              SalesData
                ? "$" + SalesData.anthony_gross_sale_value.toLocaleString()
                : "$0"
            }`}
            percentageChange=""
            trendText="Gross Sale"
            visitorsText=""
            updownsign="$"
            updownsigncolor="#fcd6a4"
            updownsigncolortext="#a35816"
          />
        </div>

        <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <StatBox
            nameStat="Poke Hana"
            numberValue={`${
              SalesData
                ? "$" + SalesData.pokehana_gross_sale_value.toLocaleString()
                : "$0"
            }`}
            percentageChange=""
            trendText="Gross Sale"
            visitorsText=""
            updownsign="$"
            updownsigncolor="#fcd6a4"
            updownsigncolortext="#a35816"
          />
        </div>
      </div>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          paddingTop: "30px",
          paddingLeft: "30px",
          letterSpacing: "1px",
        }}
      >
        Merchants Net Sales
      </h1>
      <div
        style={{ display: "flex", paddingTop: "30px", paddingBottom: "30px" }}
      >
        <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <StatBox
            nameStat="Marathon Liquor"
            numberValue={`${
              SalesData
                ? "$" + SalesData.marathon_net_sale_value.toLocaleString()
                : "$0"
            }`}
            percentageChange=""
            trendText="Net Sale"
            visitorsText=""
            updownsign="$"
            updownsigncolor="#b1f6ff"
            updownsigncolortext="#322282"
          />
        </div>

        <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <StatBox
            nameStat="Anthony's Pizza"
            numberValue={`${
              SalesData
                ? "$" + SalesData.anthony_net_sale_value.toLocaleString()
                : "$0"
            }`}
            percentageChange=""
            trendText="Net Sale"
            visitorsText=""
            updownsign="$"
            updownsigncolor="#b1f6ff"
            updownsigncolortext="#322282"
          />
        </div>
        <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <StatBox
            nameStat="Poke Hana"
            numberValue={`${
              SalesData
                ? "$" + SalesData.pokehana_net_sale_value.toLocaleString()
                : "$0"
            }`}
            percentageChange=""
            trendText="Net Sale"
            visitorsText=""
            updownsign="$"
            updownsigncolor="#b1f6ff"
            updownsigncolortext="#322282"
          />
        </div>
      </div>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          paddingTop: "30px",
          paddingLeft: "30px",
          letterSpacing: "1px",
        }}
      >
        Merchants Gross & Net Sales Revenue
      </h1>
      <div
        style={{ display: "flex", paddingTop: "30px", paddingBottom: "30px" }}
      >
        <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <StatBox
            nameStat="Gross Revenue"
            numberValue={`${
              SalesData
                ? "$" + SalesData.SS_gross_revenue.toLocaleString()
                : "$0"
            }`}
            percentageChange=""
            trendText="Three Merchants"
            visitorsText=""
            updownsign="$"
            updownsigncolor="#beb1ff"
            updownsigncolortext="#32218a"
          />
        </div>
        <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <StatBox
            nameStat="Net Revenue"
            numberValue={`${
              SalesData ? "$" + SalesData.SS_net_revenue.toLocaleString() : "$0"
            }`}
            percentageChange=""
            trendText="Three Merchants"
            visitorsText=""
            updownsign="$"
            updownsigncolor="#beb1ff"
            updownsigncolortext="#32218a"
          />
        </div>
      </div>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          paddingTop: "30px",
          paddingLeft: "30px",
          letterSpacing: "1px",
        }}
      >
        Merchants Gross Revenue(Daily, Weekly, Monthly) - Average
      </h1>
      <div
        style={{ display: "flex", paddingTop: "30px", paddingBottom: "30px" }}
      >
        <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <StatBox
            nameStat="Gross Revenue(Daily)"
            numberValue={`${
              SalesData
                ? "$" + SalesData.SS_gross_revenue_daily.toLocaleString()
                : "$0"
            }`}
            percentageChange=""
            trendText="Average Revenue"
            visitorsText=""
            updownsign="$"
            updownsigncolor="#ffb1de"
            updownsigncolortext="#a35816"
          />
        </div>
        <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <StatBox
            nameStat="Gross Revenue(Weekly)"
            numberValue={`${
              SalesData
                ? "$" + SalesData.SS_gross_revenue_weekly.toLocaleString()
                : "$0"
            }`}
            percentageChange=""
            trendText="Average Revenue"
            visitorsText=""
            updownsign="$"
            updownsigncolor="#ffb1de"
            updownsigncolortext="#a35816"
          />
        </div>
        <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <StatBox
            nameStat="Gross Revenue(Monthly)"
            numberValue={`${
              SalesData
                ? "$" + SalesData.SS_gross_revenue_monthly.toLocaleString()
                : "$0"
            }`}
            percentageChange=""
            trendText="Average Revenue"
            visitorsText=""
            updownsign="$"
            updownsigncolor="#ffb1de"
            updownsigncolortext="#a35816"
          />
        </div>
      </div>
    </>
  );
}
