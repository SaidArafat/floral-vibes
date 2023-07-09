import React from "react";

const StatsItem = ({ value, message }) => {
  return (
    <div className="p-4 text-center">
      <span className="font-medium">{value}+</span>
      <p className="capitalize text-sm md:text-base">{message}</p>
    </div>
  );
};

export default StatsItem;
