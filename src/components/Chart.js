import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import { Card, CardBody, CardTitle, Spinner } from "reactstrap";
import base_url from "../api/bootapi";

const Chart = () => {
  const [chartData, setChartData] = useState({
    categories: [],
    total: [],
    closed: [],
    percentages: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${base_url}/project/success-percentage`)
      .then((response) => {
        const data = response.data;
        const categories = data.map(
          (item) =>
            `${item.successPercentage.toFixed(0)}%<br/>${item.department}`
        );
        const total = data.map((item) => item.total);
        const closed = data.map((item) => item.closed);
        const percentages = data.map((item) => item.successPercentage);

        setChartData({ categories, total, closed, percentages });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching chart data:", error);
        setLoading(false);
      });
  }, []);

  const chartOptions = {
    chart: {
      type: "column",
    },
    title: {
      text: "Department wise - Total Vs Closed",
      align: "left",
      style: { fontSize: "16px" },
    },
    xAxis: {
      categories: chartData.categories,
      labels: {
        useHTML: true,
        style: { textAlign: "center" },
      },
    },
    yAxis: {
      min: 0,
      title: { text: null },
    },
    legend: {
      align: "center",
      verticalAlign: "bottom",
    },
    plotOptions: {
      column: {
        grouping: true,
        borderRadius: 4,
        pointPadding: 0.2,
        groupPadding: 0.1,
      },
    },
    colors: ["#0B5ED7", "#198754"],
    series: [
      {
        name: "Total",
        data: chartData.total,
      },
      {
        name: "Closed",
        data: chartData.closed,
      },
    ],
  };

  return (
    <Card className="mt-5 mb-5 shadow-sm">
      <CardBody>
        <CardTitle tag="h5">Project Success Chart</CardTitle>
        {loading ? (
          <div className="text-center">
            <Spinner color="primary" />
          </div>
        ) : (
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        )}
      </CardBody>
    </Card>
  );
};

export default Chart;
