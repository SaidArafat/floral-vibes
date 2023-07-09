import React from "react";
import Input from "../common/input";
import Button from "../common/button";

const DeliveryInfo = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("FormSubmit");
  };

  return (
    <div className="w-full">
      <h1 className="font-medium">Delivery Information</h1>
      <div className="bg-white px-4 py-8 my-4">
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Name"
              type="text"
              name="name"
              placeholder="Said Arafat"
              focus
            />
            <Input
              label="Mobile Number"
              type="text"
              name="mobile"
              placeholder="+20106992895"
            />
            <Input
              label="email"
              type="email"
              name="email"
              placeholder="s.arafat@gmail.com"
            />
            <Input
              label="city"
              type="text"
              name="city"
              placeholder="6 October"
            />
            <Input label="state" type="text" name="state" placeholder="Cairo" />
            <Input label="ZIP" type="text" name="ZIP" placeholder="98332" />
          </div>
          <div className="mt-4">
            <Button secondary outline rounded>
              Submit Info
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryInfo;
