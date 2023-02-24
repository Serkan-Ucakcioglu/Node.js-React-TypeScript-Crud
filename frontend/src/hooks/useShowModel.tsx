import React, { useState } from "react";

function useShowModel() {
  const [show, setShow] = useState<Boolean>(false);

  const active = () => {
    setShow(true);
  };

  const close = () => {
    setShow(false);
  };

  return { active, close };
}

export default useShowModel;
