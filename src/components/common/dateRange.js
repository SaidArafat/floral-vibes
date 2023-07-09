import React from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangeComponent = ({ selectedRange, onDateChange }) => {
  const handleDateChange = (ranges) => {
    onDateChange([ranges.selection]);
  };

  const today = new Date();
  const minDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 2
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <label className="mb-2 self-start">Dates:</label>
      <DateRange
        rangeColors={["#fab6bf"]}
        ranges={selectedRange}
        onChange={handleDateChange}
        moveRangeOnFirstSelection={false}
        minDate={minDate}
      />
    </div>
  );
};

export default DateRangeComponent;
