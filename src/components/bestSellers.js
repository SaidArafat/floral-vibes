import React from "react";
import Slider from "./common/slider";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchFlowers } from "./../store/slices/flowerSlice";
import StatusIndicator from "./common/statusIndicator";
import flowers from "./../data/flowers";

const BestSellers = () => {
  // const { flowers, isLoading, error } = useSelector((state) => state.flowers);
  // const { isSuccess } = useSelector((state) => state.cart);
  // console.log(isSuccess);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchFlowers());
  // }, [dispatch]);

  const bestSeller = flowers.filter((flower) => {
    return flower.isBestseller === true;
  });

  return (
    <StatusIndicator
    // isLoading={isLoading} error={error}
    >
      <section className="bg-white p-8">
        <h2 className="text-3xl mb-4 capitalize">Our Best Sellers</h2>
        <Slider slides={bestSeller} />
      </section>
    </StatusIndicator>
  );
};

export default BestSellers;
