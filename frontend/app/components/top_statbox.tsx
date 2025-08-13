"use client";
import { useEffect, useState } from "react";
import StatBox from "./statbox";

interface customerData {
  total_customers: number;
  name_Customers: number;
  phonenumber_Customers: number;
  email_Customers: number;
  phone_email_customer: number;
}
export default function TopStatBox() {
  const [total_Merchants, settotal_Merchants] = useState<number>(0);
  const [total_Customers, settotal_Customers] = useState<customerData | null>(
    null
  );

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((json) => {
        settotal_Merchants(json.total_Merchants);
        settotal_Customers({
          total_customers: json.total_customers,
          name_Customers: json.name_Customers,
          phonenumber_Customers: json.phonenumber_Customers,
          email_Customers: json.email_Customers,
          phone_email_customer: json.phone_email_customer,
        });
      })
      .catch((err) => console.error("Error fetching merchant data:", err));
  }, []);
  return (
    <>
      <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
        <StatBox
          nameStat="Total Merchants"
          numberValue={total_Merchants.toLocaleString()}
          percentageChange=""
          trendText="Steady Increase"
          visitorsText=""
          updownsign="↑"
          updownsigncolor="#a4fcf2"
          updownsigncolortext="#16a34a"
        />
      </div>

      <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
        <StatBox
          nameStat="Total Customers"
          numberValue={
            total_Customers
              ? total_Customers.total_customers.toLocaleString()
              : "0"
          }
          percentageChange=""
          trendText="Registered"
          visitorsText=""
          updownsign="↑"
          updownsigncolor="#a4fcf2"
          updownsigncolortext="#16a34a"
        />
      </div>

      <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
        <StatBox
          nameStat="Total Customers"
          numberValue={
            total_Customers
              ? total_Customers.name_Customers.toLocaleString()
              : "0"
          }
          percentageChange=""
          trendText="With their Names"
          visitorsText=""
          updownsign="↑"
          updownsigncolor="#a4fcf2"
          updownsigncolortext="#16a34a"
        />
      </div>

      <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
        <StatBox
          nameStat="Total Customers"
          numberValue={
            total_Customers
              ? total_Customers.email_Customers.toLocaleString()
              : "0"
          }
          percentageChange=""
          trendText="With their Email"
          visitorsText=""
          updownsign="↓"
          updownsigncolor="#fca4a4"
          updownsigncolortext="#a31616"
        />
      </div>

      <div style={{ paddingLeft: "30px" }}>
        <StatBox
          nameStat="Total Customers"
          numberValue={
            total_Customers
              ? total_Customers.phonenumber_Customers.toLocaleString()
              : "0"
          }
          percentageChange=""
          trendText="With their Phone"
          visitorsText=""
          updownsign="↓"
          updownsigncolor="#fca4a4"
          updownsigncolortext="#a31616"
        />
      </div>
    </>
  );
}
