import React from "react";
import Calendar from "react-calendar";

const CalendarCovid = (props) => {
  return (
    <div>
      <Calendar
        onChange={props.clickDate}
        // value={props.date}
        calendarType="US"
        // activeStartDate={new Date(2021, 0, 1)}
        minDate={new Date(2021, 0, 1)}
        maxDate={new Date(2021, 2, 7)}
        setActiveDate={new Date(2021, 0, 1)}
      />
    </div>
  );
};

export default CalendarCovid;
