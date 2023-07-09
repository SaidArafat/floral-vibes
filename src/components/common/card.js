import React from "react";

const Card = (props) => {
  const { image, title, job, message } = props;

  return (
    <blockquote className="bg-secondary py-8 px-10 md:px-8 rounded-xl shadow-md">
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col space-y-2 mt-2">
        <h3 className="font-semibold text-lg tracking-wide capitalize text-primary">
          {title}
        </h3>
        <p className="capitalize opacity-50">{job}</p>
        <p className="before:content-[open-quote] after:content-[close-quote]">
          {message}
        </p>
      </div>
    </blockquote>
  );
};

export default Card;
