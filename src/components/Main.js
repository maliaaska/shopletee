import React from "react";
import Shop from "./Shop";
import Contact from "./Contact";

const Main = () => {
  const showShop = () => {
    if (window.location.pathname === "/") {
      return (
        <div>
          <div>Please enjoy a selection of our amazing products</div>
          <Shop />
        </div>
      );
    }
  };
  const showContact = () => {
    if (window.location.pathname === "/contact") {
      return (
        <div>
          <Contact />
        </div>
      );
    }
  };
  return (
    <div className="ui text container">
      {showShop()}
      {showContact()}
    </div>
  );
};

export default Main;
