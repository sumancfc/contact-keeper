import React from "react";
import spinner from "./spinner.gif";

const Loading = () => (
  <>
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt='Loading...'
    />
  </>
);

export default Loading;
