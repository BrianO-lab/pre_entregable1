import React from "react";
import { Ring } from '@uiball/loaders'

function Loader() {
  return (
    <>
      <Ring
        size={100}
        lineWeight={5}
        speed={2}
        color="black"
      />
    </>
  );
}

export default Loader