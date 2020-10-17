import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";
import "../useEffect/effect.css";

export const CallbackHook = () => {
  const [counter, setCoutner] = useState(10);
  // const increment = () => {
  //   setCoutner(counter + 1);
  // };

  const increment = useCallback((num) => {
    setCoutner(c => c + num);
  },[setCoutner]);

  return (
    <div>
      <h1>Callback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};