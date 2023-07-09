import React, { useRef } from "react";
import { Link } from "react-router-dom";

const FooterList = ({ title, items }) => {
  const listRef = useRef(null);

  const toggleFooterList = () => {
    listRef.current.classList.toggle("hidden");
  };

  return (
    <section className="transition-all duration-500">
      <header className="flex justify-between items-center pb-1 mb-2 border-b md:border-0">
        <h4 className="capitalize font-medium text-lg">{title}</h4>
        <i
          onClick={toggleFooterList}
          className="fa-solid fa-chevron-down md:hidden cursor-pointer md:cursor-default"
        ></i>
      </header>
      <ul ref={listRef} className="hidden md:block mb-4">
        {items.map((item, index) => (
          <li key={index} className="capitalize mb-2 hover:text-primary">
            <Link to={`/${item.replace(/\s+/g, "-")}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterList;
