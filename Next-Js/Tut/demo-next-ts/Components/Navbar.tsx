import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <div className="appbar">
        <h1 className="site-name">SiteName</h1>
      </div>
      <Link href={"/"}>
        <p>Home</p>
      </Link>
      <Link href={"/about"}>
        <p>About us</p>
      </Link>
      <Link href={"/contact"}>
        <p>Contact-us</p>
      </Link>
    </nav>
  );
};

export default Navbar;
