import React from "react";
import ReactDOM from "react-dom";
import Photo from "./Photo";

// TODO:

// - test whether the passed props will
//   actually output a proper Photo component

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Photo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
