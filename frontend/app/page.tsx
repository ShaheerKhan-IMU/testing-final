import MerchantBarChart from "./components/merchant_barchart";
import CustomerPieChart from "./components/customer_piechart";
import TopStatBox from "./components/top_statbox";
import MerchantVolumeLineChart from "./components/merchant_volume_linechart";
import RevenueStatBox from "./components/revenue_stats";
import GPMPieChart from "./components/profit_piechart";

export default function Page() {
  return (
    <>
      <h1>shaheer</h1>
      <div
        style={{ display: "flex", paddingTop: "30px", paddingBottom: "30px" }}
      >
        <TopStatBox />
      </div>
      <div
        style={{ display: "flex", paddingTop: "30px", paddingBottom: "30px" }}
      >
        <div
          style={{
            paddingRight: "30px",
            paddingLeft: "30px",
          }}
        >
          <MerchantBarChart />
        </div>
        <div
          style={{
            paddingRight: "30px",
            paddingLeft: "30px",
          }}
        >
          <CustomerPieChart />
        </div>
      </div>
      <div style={{ padding: "30px" }}>
        <MerchantVolumeLineChart />
      </div>
      <div>
        <RevenueStatBox />
      </div>
      {/* <div style={{ padding: "30px" }}>
        <GPMPieChart />
      </div> */}
    </>
  );
}
