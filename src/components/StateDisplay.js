import React from "react";

const StateDisplay = (props) => {
  // console.log(props);
  console.log("hihi" + props.date);
  const filterData = props.displayThread.filter((data) => {
    // if (new Date(data.date) === props.date) {
    // }
    // console.log(props.date);
    return (
      <div className="data" key={data.date}>
        <p>Date:{data.date}</p>
        <p>No of Death:{data.death}</p>
      </div>
    );
  });
  // console.log(filterData);
  return (
    <>
      <div>{filterData}</div>
    </>
  );
};

export default StateDisplay;

// import React from "react";

// const StateDisplay = (props) => {
//   const filterState = props.displayThread.map((data) => {
//     console.log(props.displayThread);
//     return <p>{data.state}</p>;
//   });
//   console.log({ filterState });
//   return <div>{$`filterState`}</div>;
// };

// export default StateDisplay;

//key={Math.random(Math.floor())
