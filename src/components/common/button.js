import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  primary,
  secondary,
  outline,
  rounded,
  diagonal,
  icon,
  active,
  link,
  children,
  ...rest
}) => {
  let classes =
    "py-2 border-2 capitalize cursor-pointer inline-block transition-all duration-300 text-center";

  if (icon) {
    classes += " px-3";
  } else {
    classes += " w-44 m-1";
  }

  if (primary) {
    classes += " border-primary";
    classes += outline
      ? " hover:bg-primary hover:text-white"
      : " bg-primary text-white hover:bg-white hover:text-black";
    classes += active ? " bg-primary text-white" : "";
  } else if (secondary) {
    classes += " border-black";
    classes += active ? " bg-black text-white" : "";
    classes += outline
      ? " hover:bg-black text-primary hover:text-white"
      : " bg-black text-white hover:bg-white hover:text-primary";
  }

  if (rounded) {
    classes += " rounded-full";
  } else if (diagonal) {
    classes += " rounded-tr-full rounded-bl-full";
  }

  if (link) {
    return (
      <Link className={classes} to={link}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
