"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface StatBoxProps {
  nameStat: string;
  numberValue: string;
  percentageChange: string;
  trendText: string;
  visitorsText: string;
  updownsign: string;
  updownsigncolor: string;
  updownsigncolortext: string;
}

export default function RevenueBigStatBox({
  nameStat,
  numberValue,
  percentageChange,
  trendText,
  visitorsText,
  updownsign,
  updownsigncolor,
  updownsigncolortext,
}: StatBoxProps) {
  return (
    <div
      style={{
        width: "15rem",
        padding: "1rem",
        borderRadius: "0.75rem",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        border: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#4b5563", fontSize: "0.875rem" }}>
          {nameStat}
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "0.875rem",
            color: updownsigncolortext,
            backgroundColor: updownsigncolor,
            padding: "0.125rem 0.5rem",
            marginLeft: "50px",
            borderRadius: "0.5rem",
          }}
        >
          {updownsign} {percentageChange}
        </span>
      </div>

      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginTop: "0.5rem",
        }}
      >
        {numberValue}
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "0.25rem",
          color: "#374151",
          fontSize: "0.875rem",
          fontWeight: 500,
        }}
      >
        {trendText}
        <ArrowUpRight size={14} style={{ marginLeft: "0.25rem" }} />
      </div>

      <p
        style={{
          color: "#6b7280",
          fontSize: "0.875rem",
          marginTop: "0.25rem",
        }}
      >
        {visitorsText}
      </p>
    </div>
  );
}
