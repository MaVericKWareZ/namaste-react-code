import React from "react";
import ReactDOM from "react-dom/client";

//  React Element
const heading = (
  <h1 className="head" tabIndex="5">
    Welcome to Namaste React 🚀
  </h1>
);

// React Component

const HeadingComponent = () => {
  return <h1>Namaste React from functional component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
