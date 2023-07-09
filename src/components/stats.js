import React from "react";
import StatsItem from "./common/statsItem";

const Stats = () => {
  const data = [
    { value: 3000, message: "package sold" },
    { value: 5000, message: "bouquet sold" },
    { value: 700, message: "happy clients" },
    { value: 15, message: "years of experience" },
  ];

  const renderedItems = data.map((item, index) => {
    return <StatsItem key={index} value={item.value} message={item.message} />;
  });

  return (
    <section className="p-8 flex items-center justify-evenly divide-primary divide-x-2 bg-white">
      {renderedItems}
    </section>
  );
};

export default Stats;
