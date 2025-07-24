import React from "react";
import Header from "./Header";
import Dashboard from "./Status";
import Chart from "./Chart";
import Status from "./Status";
import Navbar from "../Login/Navbar";

function DashboardPage() {
  return (
    <div>
      <Navbar />

      <Header name="Dashboard" />
      <div
        className="border  rounded px-5 mx-5 position-absolute bg-white shadow"
        style={{ top: "150px", left: "-2%", right: "-2%", zIndex: 10 }}
      >
        <Status />
        <Chart />
      </div>
    </div>
  );
}

export default DashboardPage;
