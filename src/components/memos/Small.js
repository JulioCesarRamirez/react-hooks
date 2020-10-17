import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("I called me again =(");
  return <small>{value}</small>;
});
