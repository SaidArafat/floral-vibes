import React, { useEffect, useState } from "react";
import Button from "./common/button";
import FilterButton from "./common/filterButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlowers } from "../store/slices/flowerSlice";
import StatusIndicator from "./common/statusIndicator";
import { addToCart } from "../store/slices/cartSlice";

const Popular = () => {
  const { flowers, isLoading, error } = useSelector((state) => state.flowers);

  const [filter, setFilter] = useState("bouquet");
  const categories = ["bouquet", "romance", "wedding", "summer"];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlowers());
  }, [dispatch]);

  const handleFilterSelect = (category) => {
    setFilter(category);
  };

  const selectedFlowers = flowers.filter(
    (flower) => flower.category === filter.toLocaleLowerCase()
  );

  const renderedFilteredButtons = categories.map((category) => {
    return (
      <FilterButton
        key={category}
        active={category === filter}
        handleFilterSelect={handleFilterSelect}
        category={category}
      />
    );
  });

  const renderedFlowers = selectedFlowers.map((flower, index) => {
    return (
      <div
        key={flower.id}
        className={`relative h-[10rem] md:h-[15rem] rounded-lg col-span-1 overflow-hidden ${
          index === 0 && "row-span-2 h-[20.5rem] md:h-[30.5rem]"
        }`}
      >
        <img
          src={flower.image}
          alt={`${flower.category} flower`}
          className="w-full h-full object-cover"
        />
        <div className="p-2 absolute  right-0 bottom-0">
          <Button
            primary
            rounded
            icon
            onClick={() => dispatch(addToCart(flower))}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </Button>
        </div>
      </div>
    );
  });

  return (
    <StatusIndicator isLoading={isLoading} error={error}>
      <section className="p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
          <h2 className="text-3xl capitalize mb-2 sm:m-0">
            popular categories
          </h2>
          <Button primary rounded outline link="/flowers">
            all flowers
          </Button>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-row flex-wrap items-center justify-evenly md:items-start md:flex-col">
            {renderedFilteredButtons}
          </div>
          <section className="grid gap-2 grid-cols-2 py-4 md:w-2/3">
            {renderedFlowers}
          </section>
        </div>
      </section>
    </StatusIndicator>
  );
};

export default Popular;
