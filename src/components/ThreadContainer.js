import React, { useEffect, useState } from "react";
import CalendarCovid from "./CalendarCovid";
import ChartCovid from "./ChartCovid";
import StateDisplay from "./StateDisplay";

const ThreadContainer = () => {
  const [threads, setThreads] = useState([]);
  const [date, setDate] = useState(new Date());

  const fetchData = async () => {
    const url = "https://api.covidtracking.com/v1/us/daily.json";
    const response = await fetch(url);
    const retrieveData = await response.json();

    setThreads(retrieveData);
    console.log(retrieveData);
    // console.log(filteredData);
  };

  const handleClickDate = (e) => {
    console.log(typeof e.toString());
    let months = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };
    let newArr = e.toString().split(" ");
    let newDate = `${newArr[3]}${months[newArr[1]]}${newArr[2]}`;
    console.log(newDate);
    setDate(newDate);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <p>{threads}</p> */}

      <div className="calendar">
        <CalendarCovid date={date} clickDate={handleClickDate} />
      </div>
      <StateDisplay displayThread={threads} date={date} />
    </div>
  );
};

export default ThreadContainer;

/* <Calendar
          value={date}
          onChange={setDate}
          calendarType="US"
          activeStartDate={new Date(2021, 0, 1)}
          minDate={new Date(2021, 0, 1)}
          maxDate={new Date(2021, 3, 1)}
        /> */
