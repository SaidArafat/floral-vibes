import React, { useState } from "react";
import Input from "../common/input";
import DateRange from "./../common/dateRange";
import Button from "./../common/button";

const ScheduleDelivery = () => {
  const [selectedRange, setSelectedRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [note, setNote] = useState("");

  const handleDateChange = (newRange) => {
    setSelectedRange(newRange);
  };

  const handleDeliverySubmit = (event) => {
    event.preventDefault();
    console.log(selectedRange);
    console.log(note);
  };

  return (
    <div>
      <h2 className="font-medium">Schedule Delivery</h2>
      <div className="bg-white px-4 py-8 my-4">
        <form onSubmit={handleDeliverySubmit}>
          <DateRange
            selectedRange={selectedRange}
            onDateChange={handleDateChange}
          />
          <Input
            label="note"
            type="text"
            name="note"
            placeholder="Type your note"
            onChange={(e) => setNote(e.target.value)}
          />
          <div className="mt-4">
            <Button secondary outline rounded>
              Submit Delivery
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleDelivery;
