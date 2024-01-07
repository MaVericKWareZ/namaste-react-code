import React from "react";
import ReactDOM from "react-dom/client";

import logo from "./logo.png";
/*

- Head 
    - Logo
    - Nav Item
- Body
    - Search 
    - Restaurant Container
        - Restaurant Card
            - Image
            - Name
            - Cuisine
            - Rating
            - ETA
- Footer
    - Copyright
    - Links
    - Address
    - Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://image.similarpng.com/very-thumbnail/2021/07/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <div className="res-image-container">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/k0ajwyrofyptgnvjotr5"></img>
      </div>
      <div className="res-detail-container">
        <h3>Meghana Foods</h3>
        <h4>Biryani, Indian </h4>
        <h4>4.4 Stars </h4>
        <h4>2000 for Two </h4>
        <h4>30 mins ETA </h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Enter search keyword" />
        <button className="search-button">Search</button>
      </div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
