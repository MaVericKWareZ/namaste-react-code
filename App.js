import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => {
  return <h1>Namaste React using JSX 🚀</h1>;
};

const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">
      <TitleComponent />
      Namaste React from functional component with no return 🚀
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
