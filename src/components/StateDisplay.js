import React from "react";

const StateDisplay = (props) => {
  // console.log(props);
  // console.log("hihi" + props.date);
  console.log(props.displayThread);
  const filterData = props.displayThread.filter((data) =>
    data.date.toString().includes(props.date)
  );
  console.log(filterData);

  const displayData = filterData.map((data) => {
    return (
      <div className="data" key={data.date}>
        <p>Date:{data.date}</p>
        <p>No of Death:{data.death}</p>
      </div>
    );
  });

  return <>{displayData}</>;
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

// const filterData = props.displayThread.filter((data) => {
//   if (data.date === props.date) {
//     return (
//       <div className="data" key={data.date}>
//         <p>Date:{data.date}</p>
//         <p>No of Death:{data.death}</p>
//       </div>
//     );
//   } else return null;
// });
