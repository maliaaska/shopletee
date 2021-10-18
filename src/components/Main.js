import React from "react";
import Shop from "./Shop";

const Main = () => {
  const showShop = () => {
    if (window.location.pathname === "/shop") {
      return <Shop />;
    }
  };
  return (
    <div className="ui text container">
      <h1>Please, Enjoy a selection of amazing products in our Shop.</h1>
      {showShop()}
    </div>
  );
};

export default Main;
