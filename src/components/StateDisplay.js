import React from "react";

const StateDisplay = (props) => {
  console.log(props);
  const filterState = props.displayThread.map((data) => {
    return (
      <div className="state" key={data.date}>
        <p>{data.states}</p>
      </div>
    );
  });
  console.log(filterState);
  return (
    <>
      <div>{filterState}</div>
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
