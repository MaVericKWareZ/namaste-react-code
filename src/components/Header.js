import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");
  const toggleLoginBtnName = () => {
    const toggleName = loginBtnName === "Login" ? "Logout" : "Login";
    setLoginBtnName(toggleName);
  };

  useEffect(() => {
    console.log("useEffect called with no dependency");
  });

  useEffect(() => {
    console.log("useEffect called with [] array dependency");
  }, []);

  useEffect(() => {
    console.log("useEffect called with [loginBtnName] dependency");
  }, [loginBtnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-button" onClick={toggleLoginBtnName}>
            {loginBtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
