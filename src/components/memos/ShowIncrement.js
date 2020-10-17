import React from "react";

export const ShowIncrement = ({ increment }) => {

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          increment(5);
        }}
      >
        Increment
      </button>
    </div>
  );
};
