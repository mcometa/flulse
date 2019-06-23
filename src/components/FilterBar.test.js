import React from "react";
import ReactDOM from "react-dom";
import FilterBar from "./FilterBar";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FilterBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
