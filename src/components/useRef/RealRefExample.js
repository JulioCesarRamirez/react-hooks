import React, { useState } from "react";

import { MultipleCustomHooks } from "../../components/examples/MultipleCustomHooks";

import "../useEffect/effect.css";

export const RealRefExample = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real Example ref</h1>
      <hr />
      {show && <MultipleCustomHooks />}

      <button className="btn btn-primary mt-5" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
    </div>
  );
};
