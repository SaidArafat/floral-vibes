import React, { useState } from "react";
import Button from "./common/button";
import Joi from "joi";

const Callout = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const schema = Joi.string()
    .email({ tlds: { allow: ["com", "net", "org"] } })
    .label("Email");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    const { error } = schema.validate(value);
    setError(error ? error.details[0].message : "");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { error } = schema.validate(email);
    setError(error ? error.details[0].message : "");

    if (!error) {
      console.log(email);
    }
  };

  return (
    <div className="mt-12 p-8 rounded-lg bg-primary opacity-80">
      <div className="text-center flex flex-col space-y-5  md:flex-row md:space-x-10 md:text-left lg:space-x-20">
        <div className="w-[16rem] mx-auto rounded-lg overflow-hidden bg-secondary p-2">
          <img
            src="
            https://images.pexels.com/photos/11385649/pexels-photo-11385649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="a person holds flower bouquet."
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl capitalize">Subscribe to our newsletter</h3>
          <p className="py-4">
            The front-end development services provided exceeded our
            expectations. They transformed our vision into a stunning and
            responsive website.
          </p>
          <form
            className={`p-1 bg-white rounded-full flex flex-row items-center justify-between shadow-lg border-2 border-primary ${
              error && "border-red"
            }`}
            onSubmit={handleFormSubmit}
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Enter your email address..."
              className="outline-none pl-6 w-full text-sm md:text-base"
            />
            <Button primary rounded>
              Subscribe
            </Button>
          </form>
          {error && <p className="mt-2 text-center text-red">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Callout;
