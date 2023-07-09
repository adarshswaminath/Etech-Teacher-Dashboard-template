import React from "react";
import Chart from "react-apexcharts";

const Graph = () => {
  const options = {
    chart: {
      id: "basic-line",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
    colors: ["#4F46E5"],
    grid: {
      show: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    markers: {
      size: 4,
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-lg">
      <Chart options={options} series={series} type="line" height={300} />
    </div>
  );
};

export default Graph;
