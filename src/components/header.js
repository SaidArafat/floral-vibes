import React from "react";
import Button from "./common/button";

const Header = () => {
  return (
    <section>
      <header className="flex justify-between h-[80vh] space-x-16">
        <div className="p-8 w-[60%] md:w-[50%] flex flex-col justify-evenly">
          <div>
            <h1 className="text-3xl md:text-7xl">
              <span className="text-primary">Rich Collection</span>
              <span className="block"> Of Flowers</span>
            </h1>
          </div>
          <p>
            Where flowers are out inspiration to create lasting memories.
            Whatever the occasion our flowers will make it special.
          </p>
          <Button secondary outline diagonal link="/flowers">
            explore flowers
          </Button>
        </div>
        <div className="w-[33%] bg-primary p-8 relative">
          <div className="rounded-full overflow-hidden absolute w-[5rem] h-[30rem] left-[-2.5rem] top-[17%] md:w-[13rem] md:left-[-6rem] lg:w-[20rem] lg:left-[-10rem] lg:top-[10%]">
            <img
              src="https://images.pexels.com/photos/9641790/pexels-photo-9641790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="home page flower"
              className="w-full h-full object-cover"
            />
          </div>
          <ul className="absolute rotate-90 flex right-[-8rem] md:right-[-5rem] top-[50%] w-[20rem] justify-between">
            <li className="">SOCIAL</li>
            <li className="-rotate-90 hover:text-white transition-all duration-300">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                FB
              </a>
            </li>
            <li className="-rotate-90 hover:text-white transition-all duration-300">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                IN
              </a>
            </li>
            <li className="-rotate-90 hover:text-white transition-all duration-300">
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                TW
              </a>
            </li>
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Header;
