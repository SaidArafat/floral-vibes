import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import StatusIndicator from "./common/statusIndicator";
import Slider from "./common/slider";
import Callout from "./callout";
// import { fetchFeedbacks } from "../store/slices/feedbackSlice";
import feedbacks from "./../data/feedbacks";

const Testimonials = () => {
  // const { feedbacks, isLoading, error } = useSelector(
  //   (state) => state.feedbacks
  // );

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchFeedbacks());
  // }, [dispatch]);

  return (
    <StatusIndicator
    // isLoading={isLoading} error={error}
    >
      <section className="p-8 bg-white pb-16">
        <h2 className="text-3xl mb-4">Testimonials</h2>
        <Slider slides={feedbacks} testimonials />
        <Callout />
      </section>
    </StatusIndicator>
  );
};

export default Testimonials;
