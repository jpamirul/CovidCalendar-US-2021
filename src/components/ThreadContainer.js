import React, { useEffect, useState } from "react";
import StateDisplay from "./StateDisplay";

const ThreadContainer = () => {
  const [threads, setThreads] = useState([]);

  const fetchData = async () => {
    const url = "https://api.covidtracking.com/v1/us/daily.json";
    const response = await fetch(url);
    const retrieveData = await response.json();

    setThreads(retrieveData);
    console.log(retrieveData);
    // console.log(filteredData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <p>{threads}</p> */}
      <StateDisplay displayThread={threads} />
    </div>
  );
};

export default ThreadContainer;
