import React from "react";
import Button from "./button";

const FilterButton = ({ category, handleFilterSelect, active }) => {
  return (
    <Button
      primary
      rounded
      outline
      active={active}
      onClick={() => handleFilterSelect(category)}
    >
      <i className="fa-regular fa-heart mr-3"></i>
      {category}
    </Button>
  );
};

export default FilterButton;
