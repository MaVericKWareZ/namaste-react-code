import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "heading1" }, "Hello World from h1!"),
  React.createElement("h2", { id: "heading2" }, "Hello World from h2!"),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
