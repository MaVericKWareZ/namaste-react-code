import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>Hello! </span>;
const title = (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste React using JSX 🚀
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading">
      Namaste React from functional component with no return 🚀
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
