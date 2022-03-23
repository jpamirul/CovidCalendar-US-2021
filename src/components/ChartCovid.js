import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const ChartCovid = () => {
  const [dataGroup, setData] = useState([]);

  const fetchData = async () => {
    const url = "https://api.covidtracking.com/v1/us/daily.json";
    const response = await fetch(url);
    const retrieveData = await response.json();

    const reversed = retrieveData.reverse();
    setData(reversed);

    // console.log(filteredData);
  };
  console.log(dataGroup);

  useEffect(() => {
    fetchData();
  }, []);

  const deathArr = dataGroup.map((data) => ({
    death: data.death,
  }));

  console.log(deathArr);

  const deathVal = deathArr.map((a) => a.death);

  console.log(deathVal);

  const dateArr = dataGroup.map((data) => ({
    date: data.date,
  }));

  const dateval = dataGroup.map((b) => b.date);

  const hospitalizedArr = dataGroup.map((data) => ({
    hospitalized: data.hospitalized,
  }));

  const hospitalizedVal = dataGroup.map((c) => c.hospitalized);

  //   const filterChart =

  const series = [
    {
      name: "Death",
      data: deathVal,
    },
    {
      name: "Hospitalised",
      data: hospitalizedVal,
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "date",
      categories: dateval,
    },
    tooltip: {
      x: {
        format: "yyyy/mm/dd",
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default ChartCovid;
