import React from "react";
import Button from "./button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

const Plan = ({ item }) => {
  const { image, title, price } = item;

  const dispatch = useDispatch();

  return (
    <div className="h-[26rem] bg-secondary rounded-xl overflow-hidden flex flex-col justify-between pb-4 shadow-md">
      <img src={image} alt={title} className="w-full h-80 object-cover" />
      <div className="px-4 flex items-center justify-between">
        <div>
          <h4 className="font-medium capitalize">{title}</h4>
          <p>$ {price}</p>
        </div>
        <Button primary rounded icon onClick={() => dispatch(addToCart(item))}>
          <i className="fa-solid fa-cart-shopping"></i>
        </Button>
      </div>
    </div>
  );
};

export default Plan;
