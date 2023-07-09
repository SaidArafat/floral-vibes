import React from "react";
import Button from "./common/button";

const Blog = () => {
  return (
    <section className="p-8 flex items-center flex-col md:flex-row justify-between md:space-x-4">
      <div className="md:w-1/2">
        <h2 className="text-3xl">Find your perfect bouquet flower</h2>
        <p className="my-9">
          Flowers as a gift together with sincare interest in one's alling
          health is the best medicine. Round Bouquet of pink tulip and genminas
          together with santinis and astromendid the room.
        </p>

        <Button secondary outline diagonal link="/flowers">
          Know more
        </Button>
      </div>
      <section className="grid gap-2 grid-cols-2 h-[28rem] py-4 md:w-1/2">
        <div className="rounded-lg overflow-hidden col-span-1 row-span-2">
          <img
            src="https://images.pexels.com/photos/8261090/pexels-photo-8261090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="flower"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/4043324/pexels-photo-4043324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="flower"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/4591375/pexels-photo-4591375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="flower"
            className="object-cover w-full h-full"
          />
        </div>
      </section>
    </section>
  );
};

export default Blog;
