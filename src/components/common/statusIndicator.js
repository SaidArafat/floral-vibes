import React from "react";

const StatusIndicator = ({ isLoading, error, children }) => {
  if (isLoading) {
    return (
      <div className="text-center text-black text-5xl">
        <i className="fa-solid fa-spinner fa-spin"></i>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red">{error}</div>;
  }

  return <>{children}</>;
};

export default StatusIndicator;
