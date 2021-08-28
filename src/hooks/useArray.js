import React from "react";
import { useState } from "react";

const useArray = (initValue) => {
  const [array, _setArray] = useState(initValue);

  const setArray = (value, idx) => {
    array.splice(idx, 1, value);
    _setArray([...array]);
  };

  return [array, setArray];
};

export default useArray;