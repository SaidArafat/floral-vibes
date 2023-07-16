import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
// import { fetchCartItems } from "../../store/slices/cartSlice";
// import { useDispatch, useSelector } from "react-redux";
import cart from "./../../data/cart";

const Navbar = () => {
  // const { cart } = useSelector((state) => state.cart);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCartItems());
  // }, [dispatch]);

  const listRef = useRef();
  const toggleNavList = () => {
    listRef.current.classList.toggle("hidden");
  };

  const location = useLocation();

  const links = [
    { path: "/", label: "home" },
    { path: "/gallery", label: "gallery" },
    { path: "/blog", label: "blog" },
    { path: "/cart", label: "cart" },
    // { path: "/signup", label: "sign up" },
    // { path: "/signin", label: "sign in" },
  ];

  const renderedLinks = links.map((link) => {
    const isActive =
      location.pathname === link.path ||
      (link.path === "" && location.pathname === "/");
    const active = isActive && "text-primary";

    return (
      <li
        key={link.path}
        className={`mb-2 hover:text-primary capitalize transition-all duration-300 ${active}`}
      >
        <Link to={link.path}>
          {link.label}
          {link.path === "/cart" && cart.length > 0 && (
            <span className="bg-primary text-white rounded-full px-2 ml-1">
              {cart.length}
            </span>
          )}
          {link.path === "/cart" && cart.length === 0 && (
            <span className="bg-black text-white rounded-full px-2 ml-1">
              {cart.length}
            </span>
          )}
        </Link>
      </li>
    );
  });

  return (
    <nav className="px-8 py-2 md:py-0 md:flex items-center justify-between relative">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-xl">
          <Link to="/">
            Floral <span className="text-primary">Vibes</span>
          </Link>
        </div>
        <span
          onClick={toggleNavList}
          className="flex items-center justify-between cursor-pointer border-2 px-3 py-2 rounded-md md:hidden hover:text-primary transition-all duration-300"
        >
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>
      <ul
        ref={listRef}
        className="hidden absolute right-0 left-0 text-center py-4 rounded-lg md:static md:flex md:w-5/12 justify-between font-medium z-10 shadow-xl md:shadow-none bg-secondary"
      >
        {renderedLinks}
      </ul>
    </nav>
  );
};

export default Navbar;
