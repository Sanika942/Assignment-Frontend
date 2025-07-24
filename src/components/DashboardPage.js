import React from "react";
import Header from "./Header";
import Status from "./Status";
import Chart from "./Chart";
import Navbar from "../Login/Navbar";
import { Container } from "reactstrap";

function DashboardPage() {
  return (
    <div>
      <Navbar />
      <div className="position-relative">
        <Header name="Dashboard" />
        <Container
          fluid
          className="border rounded px-3 px-md-5 pt-4 pb-4 mt-4 bg-white shadow position-relative"
          style={{
            top: "-40px",
            left: "0%",
            right: "2%",
            zIndex: 10,
            maxWidth: "95%",
          }}
        >
          <Status />
          <Chart />
        </Container>
      </div>
    </div>
  );
}

export default DashboardPage;
