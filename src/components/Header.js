import React from "react";
import Link from "./Link";
const Header = () => {
  return (
    <div className="ui menu">
      <Link href="/" className="item">
        Home
      </Link>
      <Link href="/shop" className="item">
        Shop
      </Link>
      <Link href="/contact" className="item">
        Contact
      </Link>
    </div>
  );
};

export default Header;
