import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartItems,
  // updateQuantity
} from "../store/slices/cartSlice";
import Button from "./../components/common/button";
import StatusIndicator from "./../components/common/statusIndicator";
import ScheduleDelivery from "../components/cart/scheduleDelivery";

const Cart = () => {
  const { cart, isLoading, error } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  // console.log(cart);

  const cartItems = cart.map((cartItem) => {
    return (
      <div
        key={cartItem.id}
        className="flex flex-row mb-8 justify-between items-center"
      >
        <div className="flex flex-row space-x-4 items-center">
          <div className="h-20 w-20  overflow-hidden">
            <img
              src={cartItem.image}
              alt={cartItem.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium">{cartItem.title}</h3>
            <p className="opacity-60">{cartItem.category}</p>
            <p className="font-medium">${cartItem.price}</p>
          </div>
        </div>
        {/* <div className="p-4 space-x-4">
          <Button
            icon
            secondary
            outline
            onClick={() => dispatch(updateQuantity(cartItem, 1))}
          >
            +
          </Button>
          <span>{cartItem.quantity}</span>
          <Button
            icon
            secondary
            outline
            onClick={() => dispatch(updateQuantity(cartItem, -1))}
          >
            -
          </Button>
        </div> */}
      </div>
    );
  });

  const total = cart.reduce((accumulator, item) => accumulator + item.price, 0);

  return (
    <StatusIndicator isLoading={isLoading} error={error}>
      <section className="p-8 pt-4 bg-white">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <section className="w-full">
            <ScheduleDelivery />
          </section>
          <section className="w-full">
            <h1 className="font-medium">Order Summary</h1>
            <div className="bg-white px-4 py-8 my-4 flex flex-col justify-between space-y-3 divide-y">
              <div>{cartItems}</div>
              <div className="pt-1 grid grid-cols-2 gap-y-2">
                <span className="">Total</span>
                <span className="place-self-end font-medium">${total}</span>
                <Button
                  secondary
                  outline
                  rounded
                  onClick={() => console.log("Order", cart)}
                >
                  confirm order
                </Button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </StatusIndicator>
  );
};

export default Cart;
