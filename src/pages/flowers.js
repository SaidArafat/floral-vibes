import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StatusIndicator from "../components/common/statusIndicator";
import { fetchFlowers } from "../store/slices/flowerSlice";
import Plan from "../components/common/plan";

const Flowers = () => {
  const { flowers, isLoading, error } = useSelector((state) => state.flowers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlowers());
  }, [dispatch]);

  //   <div
  //   key={flower.id}
  //   className={`h-[10rem] md:h-[15rem] rounded-lg overflow-hidden col-span-1 ${
  //     index % 2 === 0 && "row-span-2 h-[20.5rem] md:h-[30.5rem]"
  //   }`}
  // >
  //   <img
  //     src={flower.image}
  //     alt={`${flower.category} flower`}
  //     className="w-full h-full object-cover"
  //   />
  // </div>

  const renderedFlowers = flowers.map((flower, index) => {
    return <Plan key={flower.id} item={flower} />;
  });

  return (
    <StatusIndicator isLoading={isLoading} error={error}>
      <section className="bg-white p-8">
        <section className="grid gap-2 grid-cols-2 md:grid-cols-3">
          {renderedFlowers}
        </section>
      </section>
    </StatusIndicator>
  );
};

export default Flowers;
