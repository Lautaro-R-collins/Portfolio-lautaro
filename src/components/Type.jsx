import React from "react";
import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Developer", "Frontend", "Backend", "UX/UI Designer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 25
        }}
      />
    </>
  );
};

export default Typewriter;