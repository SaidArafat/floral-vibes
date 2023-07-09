import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import Button from "../components/common/button";

const NotFound = () => {
  const navigate = useNavigate();
  const routeError = useRouteError();

  return (
    <section className="text-center py-8 bg-secondary h-[100vh] relative">
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-2/4 w-2/4 flex flex-col justify-evenly items-center">
        <h1 className="font-semibold text-2xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <div className="alert alert-link">
          {routeError.statusText || routeError.message}
        </div>

        <Button
          primary
          outline
          rounded
          onClick={() => navigate("/", { replace: true })}
        >
          Back To Home
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
